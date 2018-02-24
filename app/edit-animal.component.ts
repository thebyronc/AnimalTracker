import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
  <div class="form-group formInput" *ngIf="childSelectedAnimal">
  <h4>EDIT</h4>
    <div class="form-group row">
      <label for="species" class="col-sm-2 col-form-label">Species:</label>
      <div class="col-sm-10">
        <input class="form-control" [(ngModel)]="childSelectedAnimal.species">
      </div>
    </div>

    <div class="form-group row">
      <label for="name" class="col-sm-2 col-form-label">Name:</label>
      <div class="col-sm-10">
        <input class="form-control" [(ngModel)]="childSelectedAnimal.name">
      </div>
    </div>

    <div class="form-group row">
      <label for="age" class="col-sm-2 col-form-label">Age:</label>
      <div class="col-sm-10">
        <input class="form-control" type="number" [(ngModel)]="childSelectedAnimal.age">
      </div>
    </div>

    <div class="form-group row">
      <label for="diet" class="col-sm-2 col-form-label">Diet:</label>
      <div class="col-sm-10">
        <input class="form-control" [(ngModel)]="childSelectedAnimal.diet">
      </div>
    </div>

    <div class="form-group row">
      <label for="location" class="col-sm-2 col-form-label">Location:</label>
      <div class="col-sm-10">
        <input class="form-control" [(ngModel)]="childSelectedAnimal.location">
      </div>
    </div>

    <div class="form-group row">
      <label for="caretakers" class="col-sm-2 col-form-label">Caretakers:</label>
      <div class="col-sm-10">
        <input class="form-control" type="number" [(ngModel)]="childSelectedAnimal.caretakers">
      </div>
    </div>

    <div class="form-group row">
      <label for="sex" class="col-sm-2 col-form-label">Sex:</label>
      <div class="col-sm-10">
        <input class="form-control" [(ngModel)]="childSelectedAnimal.sex">
      </div>
    </div>

    <div class="form-group row">
      <label for="likes" class="col-sm-2 col-form-label">Likes:</label>
      <div class="col-sm-10">
        <input class="form-control" [(ngModel)]="childSelectedAnimal.likes">
      </div>
    </div>

    <div class="form-group row">
      <label for="dislikes" class="col-sm-2 col-form-label">Dislikes:</label>
      <div class="col-sm-10">
        <input class="form-control" [(ngModel)]="childSelectedAnimal.dislikes">
      </div>
    </div>
    <button class="btn btn-primary" (click)="doneButtonClicked()">Done</button>
  </div>
  `
})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}
