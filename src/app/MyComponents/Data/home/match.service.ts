import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  //private url = "./src/assets/match.json";
  

  //constructor(private http: HttpClient) { }

  //getInfoes(){
   // return this.http.get(this.url).pipe(
    //  tap((data: any) => console.log('Data Fetched:' + JSON.stringify(data))));}
}
