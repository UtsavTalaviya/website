export interface match{
    id:number;
    country_id:number;
    league_id:number;
    season:any;
    date:Date;
    stage:number;
    match_api_id:number;
    home_team_api_id:number;
    home_team_goal:number;
    away_team_goal:number;
}
export interface teams{
    id:number;
    team_api_id:number;
    team_fifa_api_id:number;
    team_long_name:string;
    team_short_name:string;
}
export interface Country{
    id:number;
    name:string;
}