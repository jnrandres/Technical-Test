import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-create-record',
  templateUrl: './create-record.component.html',
  styleUrls: ['./create-record.component.css']
})
export class CreateRecordComponent {
  
  public title: string = 'Geolocalizacion';
  public lat: number = 0;
  public lng: number = 0;
  public alertaCampos: number = 1;
  public alertaNumeros: number = 1;
  public idGen: string = "";
  public registrado: boolean = false;

  constructor(  
    public json: AppService) { }

  getCoordenadas(lat: string, lng: string): number{

    this.alertaCampos = 1;
    this.alertaNumeros = 1;
    this.registrado = false;
    
    if(lat.length == 0) return this.alertaCampos = 0;
    if(lng.length == 0) return this.alertaCampos = 0;
    
    this.lat = parseFloat(lat);
    this.lng = parseFloat(lng);

    if( isNaN(this.lat) ) return this.alertaNumeros = 0;
    if( isNaN(this.lng) ) return this.alertaNumeros = 0;
    
    this.idGen = uuidv4();

    const data = {
      "id": this.idGen,
      "uuid": null,
      "categoryA": null,
      "categoryB": null,
      "categoryC": null,
      "subCategory": null,
      "institutionName": null,
      "comments": "Registro de prueba RAM2",
      "politicA": null,
      "politicB": null,
      "politicC": null,
      "anonymus": true,
      "name": "Santiago",
      "email": "RAM@correo.com",
      "phone": "231312323",
      "code_state": null,
      "code_city": null,
      "gender": "M",
      "ip_address": null,
      "ip_info": null,
      "date": 1611730186000,
      "image": null,
      "staName": null,
      "citName": null,
      "citId": null,
      "latitude": this.lat,
      "longitude": this.lng,
      "locInfo": null,
      "countItems": 0,
      "fileRecords": null
    }
    console.log(data);
    this.json.addResource('/recordController/createRecord', data).subscribe( (res: any) => {
      console.log( res );
      this.registrado = true;
    });
    return 0;
  }

}
