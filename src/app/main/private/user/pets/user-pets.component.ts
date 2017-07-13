import {Component, ElementRef, OnInit, ViewChild} from '@angular/core'
import {Animal} from "../../../../entities/animal";
import {AnimalService} from "../../../../services/animal.service";

@Component({
  selector: 'user-pets',
  templateUrl: './user-pets.component.html'
})

export class UserPetsComponent implements OnInit {

  public animals: Animal[];
  public animal: Animal;

  @ViewChild('fileInput') inputEl: ElementRef;

  constructor(private animalService: AnimalService) {
  }

  ngOnInit(): void {
    this.animal = new Animal();

    this.animalService.getAll().subscribe(
      animals => {
        this.animals = animals;
      }
    );
  }

  addPet(): void {
    let inputEl: HTMLInputElement = this.inputEl.nativeElement;
    let formData = new FormData();
    formData.append('file', inputEl.files.item(0));

    this.animalService.addEntity(this.animal)
      .subscribe(
        response => {
          if (response.status === "OK"){
            this.animalService.uploadImage(response.data, formData);
          }
        }
      );
  }
}
