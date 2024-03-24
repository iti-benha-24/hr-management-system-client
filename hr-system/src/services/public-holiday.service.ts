import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicHolidayService {

  private name : any;
  private day : any ;
  private id : any ;
  constructor( private httpClient : HttpClient) { }


  GetAll() : Observable<any>{

    return this.httpClient.get("https://localhost:7057/api/PublicHolidays/getall");

  }

  Delete( Id : number) : Observable<any>{

    return this.httpClient.delete(`https://localhost:7057/api/PublicHolidays/Delete/${Id}`);

  }

  Insert( holidayData : any ) : Observable<any>{

    return this.httpClient.post("https://localhost:7057/api/PublicHolidays/AddNewHoliday" , holidayData );

  }
  
  Update ( holidayData : any  , id : number ) : Observable<any>{

    return this.httpClient.put(`https://localhost:7057/api/PublicHolidays/Update/${id}` , holidayData);
  }

  setData( name : any , day : any , id : any  ){
    this.name = name ;
    this.day = day ;
    this.id = id ;
  }

  getData(){
    return [this.name , this.day , this.id ] ;
  }

}