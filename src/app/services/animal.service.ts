import {Animal} from "../entity/animal";
import {GenericService} from "./generic.service";
import {Http, Headers} from "@angular/http";
import {RequestConst} from "../util/request-const";
import {AuthService} from "./auth.service";
import {Injectable} from "@angular/core";

@Injectable()
export class AnimalService extends GenericService<Animal, number> {

  constructor(http: Http, authService: AuthService) {
    super(http, RequestConst.PATH_TO_ANIMAL_API, authService);
    // this.headers.set('Content-Type', 'multipart/form-data');

    // this.headers.append('Content-Type', 'multipart/form-data');

    this.headers = new Headers();
    this.headers.append(RequestConst.AUTH_HEADER, this.authService.getToken());
  }

  uploadImage(animalId: number, formData: FormData): any {
    this.refreshToken();

    return this.http
      .post(
        "http://localhost:8080/api/animal/3/image",
        formData,
        this.options
      )
      .map(
        response => {
          return response;
        }
      ).subscribe(
        response => response.json()
      );
  }
}
