import {Component, ElementRef, OnInit, ViewChild} from '@angular/core'
import {Animal} from "../../../../entities/animal";
import {AnimalService} from "../../../../services/animal.service";
import {Router} from "@angular/router";
import {PagerService} from "../../../../services/pager-service.service";

@Component({
  selector: 'user-pets',
  templateUrl: './client-pets.component.html'
})

export class ClientPetsComponent implements OnInit {

  animals: Animal[];
  animal: Animal;
  @ViewChild('fileInput') inputEl: ElementRef;
  pagedAnimals: Animal[] = [];
  animalsCount: number;
  // pager object
  pager: any = {};

  constructor(private animalService: AnimalService,
              private router: Router,
              private pagerService: PagerService) {
  }

  ngOnInit(): void {
    this.animal = new Animal();

    this.animalService.getCount()
      .subscribe(
        response => {
          if (response["status"] === "OK") {
            this.animalsCount = response["data"];

            this.setPage(1);
          } else {
            console.log(response["error"]);
          }
        }
      );
  }

  setPage(page: number): void {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }
    // get pager object from service
    this.pager = this.pagerService.getPager(this.animalsCount, page);

    this.animalService.getPage(this.pager.currentPage - 1, this.pager.amount)
      .subscribe(
        response => {
          if (response["status"] === "OK") {
            this.pagedAnimals = response["data"];
          } else {
            console.log(response["error"]);
          }
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
