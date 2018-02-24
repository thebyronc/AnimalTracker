import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <select (change)="onChange($event.target.value)" class="custom-select custom-select-sm">
    <option value="allAnimals" selected="selected">All Animals</option>
    <option value="1">Young Residents (Age < 2)</option>
    <option value="2">Mature Residents (Age >= 2)</option>
  </select>
  <div class="card-deck">
    <div class="card" style="width: 18rem;" *ngFor="let currentAnimal of childAnimalList | age:filterByAge">
      <div class="card-body">
        <h5 class="card-title">{{currentAnimal.name}}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{{currentAnimal.species}}</h6>
        <p class="card-text">
          Age: {{currentAnimal.age}}
          Diet: {{currentAnimal.diet}}<br>
          Location: {{currentAnimal.location}}<br>
          Number Of Caretakers: {{currentAnimal.caretakers}}<br>
          Sex: {{currentAnimal.sex}}<br>
          Likes: {{currentAnimal.likes}}<br>
          Dislikes: {{currentAnimal.dislikes}}<br>
          <small class="text-muted"><a href="#" (click)="editButtonHasBeenClicked(currentAnimal)">Edit</a></small>
        </p>
      </div>
    </div>
  </div>

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
