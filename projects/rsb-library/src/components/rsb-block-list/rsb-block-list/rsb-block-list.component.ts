import { Component, OnInit, ViewEncapsulation, Input, EventEmitter, Output, ContentChild, TemplateRef, QueryList, ViewChildren, OnChanges, SimpleChanges } from '@angular/core';
import { RsbAction } from '../../../common/rsb-action';
import { RsbConstantsService } from '../../../services/rsb-constants.service';
import { RsbBlockItem } from '../bean/rsb-block-item';
import { RsbBlockListItemComponent } from '../rsb-block-list-item/rsb-block-list-item.component';
import { RsbSelectedItem } from '../../../common/rsb-selected-item';

@Component({
  selector: 'rsb-block-list',
  templateUrl: './rsb-block-list.component.html',
  styleUrls: ['./rsb-block-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RsbBlockListComponent<T> implements OnInit, OnChanges {

  /**
   * Items a mostrar.
   */
  @Input() blockItems:RsbBlockItem<T>[];
  /**
   * Texto que se mostrará cuando no haya items. 
   */
  @Input() labelNoResults:string = 'No results.';
  /**
   * Indica si queremos mostrar el header del block. 
   */
  @Input() showHeader:boolean = true;
  /**
   * Indica si queremos mostrar la información adicional. 
   */
  @Input() showInfoAdditional:boolean = true;
  /**
   * Indica si queremos mostrar las acciones.
   */
  @Input() showActions:boolean = true;
  /**
   * Indica si queremos mostrar el borde.
   */
  @Input() showBorder:boolean = true;
  /**
   * Indica el número de elementos por página.
   */
  @Input() pagination:number = this.constants.RsbBlockListConstants.PAGINATION_DEFAULT;
  /**
   * Texto que se muestra en el previo de la paginación. 
   */
  @Input() previousLabel:string = 'Previa';
  /**
   * Texto que se muestra en el siguiente de la paginación. 
   */
  @Input() nextLabel:string = 'Siguiente';
  /**
   * Evento al clicar sobre el bloque. 
   */
  @Output() itemSelected:EventEmitter<RsbSelectedItem<T>>;
  /**
   * Evento al seleccionar una acción. 
   */
  @Output() actionSelected:EventEmitter<RsbAction<T>>;
  /**
   * Template de la cabecera.
   */
  @ContentChild('templateHeader', {static: false}) templateHeader:TemplateRef<any>;
  /**
   * Template de la información adicional.
   */
  @ContentChild('templateInfoAdditional', {static: false}) templateInfoAdditional:TemplateRef<any>;
  /**
   * Template de los datos.
   */
  @ContentChild('templateData', {static: false}) templateData:TemplateRef<any>;

  /**
   * Referencia de los bloques hijos
   */
  @ViewChildren(RsbBlockListItemComponent) blocks:QueryList<RsbBlockListItemComponent<T>>;
  /**
   * Indica la página actual.
   */
  public page:number;

  constructor(private constants:RsbConstantsService)
  {
    this.page = 1;
    this.itemSelected = new EventEmitter<RsbSelectedItem<T>>();
    this.actionSelected = new EventEmitter<RsbAction<T>>();
  }

  ngOnChanges(changes:SimpleChanges):void
  {
    if(changes)
    {
      if(changes['blockItems'] && !changes['blockItems'].firstChange)
      {
        if(((this.page - 1) * this.pagination) == changes['blockItems'].currentValue.length)
        {
          this.page = this.page - 1;
        }
      }
    }
  }

  ngOnInit()
  {
    if(this.pagination < 0)
    {
      this.pagination = this.constants.RsbBlockListConstants.PAGINATION_DEFAULT;
    }
  }

  /**
   * Emite la acción seleccionada.
   * @param item Item seleccionado. 
   */
  sendAction($event:RsbAction<T>)
  {
    this.actionSelected.emit($event);
  }

  /**
   * Emite el item seleccionado
   * @param $event Acción seleccionada. 
   */
  selectItem(blockItem:RsbBlockItem<T>, index:number)
  {
    let selectedItem = new RsbSelectedItem<T>();
    selectedItem.item = blockItem.item;
    selectedItem.index = ((this.page - 1) * this.pagination) + index;
    this.itemSelected.emit(selectedItem);
  }

  /**
   * Cierra toas las opciones de los demás bloques. 
   * @param id Id que no cerrará sus opciones. 
   */
  closeAllOptionsExcept(id:string)
  {
    this.blocks.forEach(block => {
      if(block.id !== id)
      {
        block.showOptions = false;        
      }
    })
  }

}
