import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-all-records',
  templateUrl: './all-records.component.html',
  styleUrls: ['./all-records.component.css']
})
export class AllRecordsComponent {

  title: string = 'Geolocalizacion';
  lat: number = 51.678418;
  lng: number = 7.809007;
  zoon: number = 6;

  api_nombres: string[] = [];
  api_latitudes: number[] = [];
  api_longitudes: number[] = [];

  constructor( public json: AppService) {
    this.json.getResources('/recordController/getAllRecords').subscribe(
      (res: any) => {
        console.log(res.length);
        for(let i=0; i<res.length; i++){
          if( res[i].latitude != null ){
            this.api_nombres.push(res[i].citName);
            this.api_latitudes.push(res[i].latitude);
            this.api_longitudes.push(res[i].longitude);
          }
        }

      }
    )
  }

  getCoordenadas(lat: string, lng: string){
    this.lat = parseFloat(lat);
    this.lng = parseFloat(lng);
  }

}
