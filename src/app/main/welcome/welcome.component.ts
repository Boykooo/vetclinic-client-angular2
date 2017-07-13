import {Component, ElementRef, ViewChild} from '@angular/core'
import {Http} from "@angular/http";
import {RequestConst} from "../../util/request-const";
import {AnimalService} from "../../services/animal.service";

@Component({
  selector: 'welcome',
  templateUrl: './welcome.component.html',
  providers: [AnimalService]
})

export class WelcomeComponent {

  private file: File;
  private headers: Headers;
  @ViewChild('fileInput') inputEl: ElementRef;

  constructor(private http: Http,
              private animalService: AnimalService) {
    this.headers = RequestConst.BASE_HEADERS;
    this.headers.append('Content-Type', 'multipart/form-data');
    this.headers.append('Access-Control-Allow-Headers', '*');
  }

  sendFile(): void {
    let inputEl: HTMLInputElement = this.inputEl.nativeElement;
    let formData = new FormData();
    formData.append('file', inputEl.files.item(0));

    // this.http
    //   .post(
    //     "http://localhost:8080/api/animal/3/image",
    //     formData,
    //     this.headers
    //   )
    //   .map(
    //     response => {
    //       return response;
    //     }
    //   ).subscribe(
    //     response => response.json()
    //   );

    this.animalService.uploadImage(3, formData);
  }
}
