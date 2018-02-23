import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div>
    <h1>Initial Test</h1>
    <animal-list [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)"></animal-list>
    <edit-animal [childSelectedAnimal]="selectedAnimal" (doneButtonClickedSender)="finishedEditing()"></edit-animal>
    <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>
  </div>
  `
})

export class AppComponent {
  masterAnimalList: Animal[] = [
    new Animal('Sheep', 'Decoy', 31, 'Herbivore', 'Grasslands', 1, 'Male', 'Grass', 'Loud Noises'),
    new Animal('Kirby', 'Kirby', 4, 'Everything', 'Green Green', 1, 'Male', 'Powerups', 'Non Powerups')
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
