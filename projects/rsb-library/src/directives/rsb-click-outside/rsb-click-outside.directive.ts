// import { Directive, Input, Output, ElementRef, HostListener, EventEmitter } from '@angular/core';

// @Directive({selector: '[rsbClickOutside]'})

// export class ClickOutsideDirective
// {

//   @Input() clickOutsideEnabled:boolean = true;
//   @Input() avoidFirstTime:boolean = false;
//   @Input() clickOutsideDelay:number;

//   @Output() clickOutside:EventEmitter<MouseEvent>;

//   public firstTime:boolean;

//   constructor(private elementRef:ElementRef)
//   {
//     this.clickOutside = new EventEmitter<MouseEvent>();
//     this.firstTime = true;
//   }

//   @HostListener('document:click', ['$event'])
//   public onDocumentClick(event:MouseEvent)
//   {
//     if(this.clickOutsideEnabled)
//     {
//       const target = event.target as HTMLElement;
//       if(target && !this.elementRef.nativeElement.contains(target))  
//       {
//         if(!this.avoidFirstTime || (this.avoidFirstTime && !this.firstTime))
//         {
//           if(this.clickOutsideDelay)
//           {
//             setTimeout(() => {
//               this.clickOutside.emit(event);
//             }, this.clickOutsideDelay);
//           }
//           else 
//           {
//             this.clickOutside.emit(event);
//           }
//         }
//         else 
//         {
//           this.firstTime = false;
//         }
//       }
//     }
//   }
// }



import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({selector: '[rsbClickOutside]'})

export class ClickOutsideDirective
{
  
  @Input() clickOutsideEnabled: boolean = true;
  @Input() avoidFirstTime: boolean = false;
  @Input() clickOutsideDelay: number;
  
  @Output() clickOutside: EventEmitter<MouseEvent>;
  
  constructor(private elementRef: ElementRef)
  {
    this.clickOutside = new EventEmitter();
  }
  
  @HostListener('document:click', ['$event'])
  public onDocumentClick(event: MouseEvent)
  {
  
    if(this.clickOutsideEnabled)
    {    
      const target = event.target as HTMLElement;
      
      if(target && !this.elementRef.nativeElement.contains(target))
      {      
        if(!this.avoidFirstTime)
        {        
          if(this.clickOutsideDelay)
          {
            setTimeout(() => {
              this.clickOutside.emit(event);
            }, this.clickOutsideDelay);
          }
          else
          {
            this.clickOutside.emit(event);
          }        
        }
        else
        {
          this.avoidFirstTime = false;
        }
      }
    }
  }
}