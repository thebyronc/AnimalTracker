import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>OREGON ZOO ANIMAL RESIDENTS</h1>
    <div class="row">
      <div class="col-sm">
        <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>
      </div>
      <div class="col-sm">
        <edit-animal [childSelectedAnimal]="selectedAnimal" (doneButtonClickedSender)="finishedEditing()"></edit-animal>
      </div>
  </div>

    <animal-list [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)"></animal-list>

  </div>
  `
})

export class AppComponent {
  masterAnimalList: Animal[] = [
    new Animal('Sheep', 'Decoy', 31, 'Herbivore', 'Grasslands', 1, 'Male', 'Grass', 'Loud Noises'),
    new Animal('Kirby', 'Kirby', 1, 'Everything', 'Green Green', 1, 'Male', 'Powerups', 'Non Powerups'),
    new Animal('Dog', 'Mocha', 4, 'Everything', 'Home', 2, 'Male', 'Play', 'Boredom')
  ];

  selectedAnimal: Animal = null;

  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }

  finishedEditing() {
    this.selectedAnimal = null;
  }

  addAnimal(newAnimalFromChild: Animal) {
    this.masterAnimalList.push(newAnimalFromChild);
  }
}
