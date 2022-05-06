import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { match,teams,Country, League, ParticipantTeam, matchData, player } from './client';

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

  teamTable = "./assets/clubName.json";
  getInfoTeam():Observable<teams[]>{
    return this.http.get<teams[]>(this.teamTable).pipe(
      tap((data: any) => console.log('Data Fetched:' + JSON.stringify(data))));
    }
  
  countryTable = "./assets/country.json";
  getInfoCountry():Observable<Country[]>{
    return this.http.get<Country[]>(this.countryTable).pipe(
      tap((data: any) => console.log('Data Fetched:' + JSON.stringify(data))));
    }

  leagueTable = "./assets/leagues.json";
  getInfoLeague():Observable<League[]>{
    return this.http.get<League[]>(this.leagueTable).pipe(
      tap((data: any) => console.log('Data Fetched:' + JSON.stringify(data))));
    }

  participantTeam = "./assets/participantTeam.json";
  getInfoParticipantTeam():Observable<ParticipantTeam[]>{
    return this.http.get<ParticipantTeam[]>(this.participantTeam).pipe(
      tap((data: any) => console.log('Data Fetched:' + JSON.stringify(data))));
    }

  MatchTable = "./assets/MatchData.json";
  getInfoMatchData():Observable<matchData[]>{
    return this.http.get<matchData[]>(this.MatchTable).pipe(
      tap((data: any) => console.log('Data Fetched:' + JSON.stringify(data))));
    }

  PlayerTeam = "./assets/name of players in particular team.json";
  getInfoPlayerTeam():Observable<player[]>{
    return this.http.get<player[]>(this.PlayerTeam).pipe(
      tap((data: any) => console.log('Data Fetched:' + JSON.stringify(data))));
    }





}
