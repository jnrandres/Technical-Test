import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';


@Injectable({
    providedIn: 'root'
})
export class AppService {

    constructor(private http: HttpClient) {}

    getResources(url: string){
        const API = environment.API_URL_BASE + url;
        return this.http.get(API);
    }

    addResource(url: string, data: object){
        const API = environment.API_URL_BASE + url;
        return this.http.post(API, data, {responseType: 'text'});
    }
}