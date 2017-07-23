import {Component, ElementRef, OnInit, ViewChild} from '@angular/core'
import {Animal} from "../../../../entities/animal";
import {AnimalService} from "../../../../services/animal.service";
import {Router} from "@angular/router";

@Component({
  selector: 'user-pets',
  templateUrl: './user-pets.component.html'
})

export class UserPetsComponent implements OnInit {

  public animals: Animal[];
  public animal: Animal;

  @ViewChild('fileInput') inputEl: ElementRef;

  constructor(private animalService: AnimalService,
              private router: Router) {
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
          console.log();
          if (response.status === "OK" && formData.get('file') !== 'null') {
            this.animalService.uploadImage(response.data, formData);
          }
        }
      );
  }

  showDetails(animal: Animal): void {
    this.router.navigate(['/client/pets', animal.id]);
  }

  getStatus(isIll: boolean): string {
    return isIll ? "Болен" : "Здоров";
  }
}
