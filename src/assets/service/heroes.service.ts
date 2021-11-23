import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class HeroesServices {

    constructor(private http: HttpClient){
    }
    
    getHeroes(): Observable<any>  {
        return this.http.get('../assets/db/hero.json');
    }

}