import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {has, get, cloneDeep } from 'lodash-es';

@Injectable({
  providedIn: 'root'
})
export class RsbConfigService {

  private _data:any;

  constructor(private http:HttpClient) { }

  getDataFromJSON(pathJSON:string)
  {
    return new Promise((resolve, reject) => {
      this.http.get(pathJSON).subscribe(data => {
        this._data = data;
        resolve(true);
      }, error => {
        console.log('RSB-config: ' + error);
        reject(true);
      });
    })
  }
  getData(path:string)
  {
    if(has(this._data, path))
    {
      return get(this._data, path);
    }
    else 
    {
      console.error('Not exists path: ' + path);
      return null;
    }
  }
  getAllData()
  {
    return cloneDeep(this._data);
  }
}
