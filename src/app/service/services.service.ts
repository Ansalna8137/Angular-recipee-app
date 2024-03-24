import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  server_url='https://dummyjson.com/recipes'
  
  constructor(private http:HttpClient) { }

  fetchData(){
    //api call
    return this.http.get(`${this.server_url}`)
  }
}
