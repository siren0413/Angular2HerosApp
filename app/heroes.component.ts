import {Component, OnInit} from '@angular/core';
import {Hero} from './hero'
import {HeroService} from "./hero.service";
import {Router} from '@angular/router'

@Component({
    selector: 'my-heroes',
    templateUrl: 'app/heroes.component.html',
    styleUrls:  ['app/heroes.component.css']
})

export class HeroesComponent implements OnInit{

    constructor(
        private router: Router,
        private heroService: HeroService) { }


    title = 'Tour of Heroes';

    heroes : Hero[];

    selectedHero: Hero;

    ngOnInit(): void {
        this.getHeroes();
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    getHeroes(): void {
        this.heroService.getHeroes().then(heroes => {this.heroes = heroes});
    }

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }
}


