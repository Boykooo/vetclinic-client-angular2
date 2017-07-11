import {Component, ElementRef, ViewChild} from '@angular/core'
import {Http} from "@angular/http";
import {RequestConst} from "../../util/request-const";

@Component({
  selector: 'welcome',
  templateUrl: './welcome.component.html'
})

export class WelcomeComponent {

  private file: File;
  private headers: Headers;
  @ViewChild('fileInput') inputEl: ElementRef;

  constructor(private http: Http) {
    this.headers = RequestConst.BASE_HEADERS;
    this.headers.append('Content-Type', 'multipart/form-data');
    this.headers.append('Access-Control-Allow-Headers', '*');
  }

  onChange(event): void {
    let files = event.target.files;
    console.log(files);
    this.file = files[0];
  }

  sendFile(): void {
    console.log("invoke");

    let inputEl: HTMLInputElement = this.inputEl.nativeElement;
    let fileCount: number = inputEl.files.length;
    let formData = new FormData();
    if (fileCount > 0) { // a file was selected
      for (let i = 0; i < fileCount; i++) {
        formData.append('file[]', inputEl.files.item(i));
      }
      this.http
        .post(
          "http://localhost:8080/mongo/1",
          formData,
          this.headers
        )
        .map(
          response => {
            return response;
          }
        ).subscribe(
        response => console.log(response)
      );
      // do whatever you do...
      // subscribe to observable to listen for response
    }

    // let body = this.http.post(
    //   "http://localhost:8080/mongo/1",
    //   this.file,
    //   this.headers
    // ).map(
    //   response => {
    //     return response;
    //   }
    //
    // ).subscribe(
    //   response => console.log(response)
    // );
  }
}
