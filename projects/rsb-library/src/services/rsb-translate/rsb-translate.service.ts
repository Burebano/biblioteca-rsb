import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RsbTranslateService {

  private _data:any;

  constructor(private httpClient:HttpClient) {}

  public getData(path:string)
  {
    return new Promise((resolve, reject) => {
      let language;
      if(navigator.language.includes('-'))
      {
        language = navigator.language.split('-')[0];
      }
      else 
      {
        language = navigator.language;
      }
      this.httpClient.get(path+language+'.json').subscribe(data => {
        this._data = data;
        resolve(true);
      }, error => {
        console.log('Error to get translations', error);
        reject(true);
      });
    });
  }

  public getTranslate(word:string)
  {
    return this._data[word];
  }

}
