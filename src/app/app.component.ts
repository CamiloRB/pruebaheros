import { Component, OnInit } from '@angular/core';
import { HeroesServices } from 'src/assets/service/heroes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'prueba';
  ArregloHeroes: any;
  Votado = false;
  Gusto = true;

  constructor(private Heroes: HeroesServices){
    this.Heroes.getHeroes().subscribe((heroes: any) => {
      this.ArregloHeroes = heroes;
      console.log(heroes)
    });
  };

  ngOnInit(){

  }

  like(Hero: number){
    console.log(Hero)
    this.ArregloHeroes[Hero-1].like = this.ArregloHeroes[Hero-1].like + 1;
    this.Votado = true;
    this.Gusto = true;
  }

  dislike(Hero: number){
    console.log(Hero)
    this.ArregloHeroes[Hero-1].dislike = this.ArregloHeroes[Hero-1].dislike + 1;
    this.Votado = true;
    this.Gusto = false;
  }

  votarDenuevo(){
    this.Votado = false;
  }

}
