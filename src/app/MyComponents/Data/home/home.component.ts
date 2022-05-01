import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/client.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  matchData!: any;
  teamsData!:any;
  countryData!:any;

  constructor(private clientService: ClientService,
              private router: Router) { }

  getdata(){
    this.clientService.getInfoes()
    .subscribe(data => {this.matchData = data});   
  }

  getdataTeams(){
    this.clientService.getInfoTeam()
    .subscribe(data => {this.teamsData = data});
  }

  getdataCountry(){
    this.clientService.getInfoCountry()
    .subscribe(data => {this.countryData = data});
    console.log(this.countryData);
  }

  gotTeamDetails(country: { id: any; }){
    this.router.navigate(['/home',country.id])
  }

  ngAfterViewInit() {
    this.getdata();
    this.getdataCountry();
    this.getdataTeams();

  }

}

