import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <ul>
    <li *ngFor="let currentAnimal of childAnimalList">
      Species: {{currentAnimal.species}}<br>
      Name: {{currentAnimal.name}}<br>
      Age: {{currentAnimal.age}}<br>
      Diet: {{currentAnimal.diet}}<br>
      Location: {{currentAnimal.location}}<br>
      Number Of Caretakers: {{currentAnimal.caretakers}}<br>
      Sex: {{currentAnimal.sex}}<br>
      Likes: {{currentAnimal.likes}}<br>
      Dislikes: {{currentAnimal.dislikes}}<br>
      <a href="#" (click)="editButtonHasBeenClicked(currentAnimal)">Edit</a>
    </li>
  </ul>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();

  editButtonHasBeenClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }

}
