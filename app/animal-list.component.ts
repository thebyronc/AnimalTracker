import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <select (change)="onChange($event.target.value)">
    <option value="allAnimals" selected="selected">All Animals</option>
    <option value="1">Young Residents (Age < 2)</option>
    <option value="2">Mature Residents (Age >= 2)</option>
  </select>
  <div class="alert alert-primary" role="alert">
  TEst
  </div>
  <ul>
    <li *ngFor="let currentAnimal of childAnimalList | age:filterByAge">
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

  filterByAge: string = "allAnimals";
  editButtonHasBeenClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }
  onChange(optionFromMenu) {
    this.filterByAge = optionFromMenu;
  }

}
