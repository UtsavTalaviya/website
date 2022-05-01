import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { match,teams,Country } from './client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  clientData = "./assets/fifa15_players.csv";
  constructor(private http: HttpClient) { }

  getInfo() {
    return this.http.get(this.clientData,{responseType:'text'});
  }

  url = "./assets/match.json";
  getInfoes():Observable<match[]>{
    return this.http.get<match[]>(this.url).pipe(
      tap((data: any) => console.log('Data Fetched:' + JSON.stringify(data))));
    }

  teamTable = "./assets/tems.json";
  getInfoTeam():Observable<teams[]>{
    return this.http.get<teams[]>(this.teamTable).pipe(
      tap((data: any) => console.log('Data Fetched:' + JSON.stringify(data))));
    }
  
  countryTable = "./assets/country.json";
  getInfoCountry():Observable<Country[]>{
    return this.http.get<Country[]>(this.countryTable).pipe(
      tap((data: any) => console.log('Data Fetched:' + JSON.stringify(data))));
    }


}
