import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
  <h4>ADD NEW RESIDENT</h4>
  <div class="form-group formInput">

    <div class="form-group row">
      <label for="species" class="col-sm-2 col-form-label">Species:</label>
      <div class="col-sm-10">
        <input class="form-control" #newSpecies>
      </div>
    </div>

    <div class="form-group row">
      <label for="name" class="col-sm-2 col-form-label">Name:</label>
      <div class="col-sm-10">
        <input class="form-control" #newName>
      </div>
    </div>

    <div class="form-group row">
      <label for="age" class="col-sm-2 col-form-label">Age:</label>
      <div class="col-sm-10">
        <input class="form-control" type="number" #newAge>
      </div>
    </div>

    <div class="form-group row">
      <label for="diet" class="col-sm-2 col-form-label">Diet:</label>
      <div class="col-sm-10">
        <input class="form-control" #newDiet>
      </div>
    </div>

    <div class="form-group row">
      <label for="location" class="col-sm-2 col-form-label">Location:</label>
      <div class="col-sm-10">
        <input class="form-control" #newLocation>
      </div>
    </div>

    <div class="form-group row">
      <label for="caretakers" class="col-sm-2 col-form-label">Caretakers:</label>
      <div class="col-sm-10">
        <input class="form-control" type="number" #newCaretakers>
      </div>
    </div>

    <div class="form-group row">
      <label for="sex" class="col-sm-2 col-form-label">Sex:</label>
      <div class="col-sm-10">
        <input class="form-control" #newSex>
      </div>
    </div>

    <div class="form-group row">
      <label for="likes" class="col-sm-2 col-form-label">Likes:</label>
      <div class="col-sm-10">
        <input class="form-control" #newLikes>
      </div>
    </div>

    <div class="form-group row">
      <label for="dislikes" class="col-sm-2 col-form-label">Dislikes:</label>
      <div class="col-sm-10">
        <input class="form-control" #newDislikes>
      </div>
    </div>
    <button class="btn btn-primary" (click)="submitForm(newSpecies.value, newName.value, newAge.value, newDiet.value, newLocation.value, newCaretakers.value, newSex.value, newLikes.value, newDislikes.value); newSpecies.value=''; newName.value=''; newAge.value=''; newDiet.value=''; newLocation.value='';newCaretakers.value=''; newSex.value=''; newLikes.value=''; newDislikes.value='';">Add New Resident</button>
  </div>
  `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();
  submitForm(species: string, name: string, age: number, diet: string, location: string, caretakers: number, sex: string, likes: string, dislikes: string) {
    var newAnimalToAdd: Animal = new Animal(species, name, age, diet, location, caretakers, sex, likes, dislikes);
    this.newAnimalSender.emit(newAnimalToAdd);
  }
}
