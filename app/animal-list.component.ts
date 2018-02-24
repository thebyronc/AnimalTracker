import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <hr>
  <select (change)="onChange($event.target.value)" class="custom-select custom-select-sm">
    <option value="allAnimals" selected="selected">All Animals</option>
    <option value="1">Young Residents (Age < 2)</option>
    <option value="2">Mature Residents (Age >= 2)</option>
  </select>

  <div class="blockOfList">
    <div class="card" *ngFor="let currentAnimal of childAnimalList | age:filterByAge">
      <div class="card-body">
        <h5 class="card-title">{{currentAnimal.name}}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{{currentAnimal.species}}</h6>
        <p class="card-text">
          <span class="pre">age:</span> {{currentAnimal.age}}<br>
          <span class="pre">diet:</span> {{currentAnimal.diet}}<br>
          <span class="pre">location:</span> {{currentAnimal.location}}<br>
          <span class="pre">caretakers:</span> {{currentAnimal.caretakers}}<br>
          <span class="pre">sex:</span> {{currentAnimal.sex}}<br>
          <span class="pre">likes:</span> {{currentAnimal.likes}}<br>
          <span class="pre">dislikes:</span> {{currentAnimal.dislikes}}<br>
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
