import {GenericService} from "./generic.service";
import {Patient} from "../entities/patient";
import {Http, Headers, RequestOptions} from "@angular/http";
import {RequestConst} from "../util/request-const";
import {AuthService} from "./auth.service";
import {Injectable} from "@angular/core";


@Injectable()
export class PatientService extends GenericService<Patient, number> {

  constructor(http: Http, authService: AuthService) {
    super(http, RequestConst.PATH_TO_PATIENT_API, authService);
  }

  addEmployeeToPatient(id: number): any {
    // let headers = new Headers(RequestConst.BASE_HEADERS);
    // headers.append(RequestConst.AUTH_HEADER, this.authService.getToken());
    // headers.append('Access-Control-Allow-Headers', '*');
    // // this.options = new RequestOptions({headers: this.headers});
    //
    // console.log(headers);

    this.refreshToken();

    return this.http.post(
      this.pathToApi + "/" + id + "/",
      null,
      this.options
    ).map(
      response => {
        return response;
      }
    );
  }

  findNew(): any {
    this.refreshToken();

    return this.http.get(
      this.pathToApi + '/new/',
      this.options
    )
      .map(
        response => {
          return response.json()
        }
      );
  }

  getInProgress(): any {
    this.refreshToken();

    return this.http.get(
      this.pathToApi + '/progress/',
      this.options
    )
      .map(
        response => {
          return response.json()
        }
      );
  }
}
