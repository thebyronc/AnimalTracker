import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div>
    <h1>Initial Test</h1>
    <animal-list [childAnimalList]="masterAnimalList"></animal-list>
  </div>
  `
})

export class AppComponent {
  selectedAnimal: Animal = null;

  masterAnimalList: Animal[] = [
    new Animal('Sheep', 'Decoy', 31, 'Herbivore', 'Grasslands', 1, 'Male', 'Grass', 'Loud Noises'),
    new Animal('Kirby', 'Kirby', 4, 'Everything', 'Green Green', 1, 'Male', 'Powerups', 'Non Powerups')
  ];

}
