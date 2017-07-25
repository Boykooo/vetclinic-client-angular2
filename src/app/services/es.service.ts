import {GenericService} from "./generic.service";
import {EsPatient} from "../entities/es-patient";
import {AuthService} from "./auth.service";
import {Http} from "@angular/http";
import {RequestConst} from "../util/request-const";
import {Injectable} from "@angular/core";

@Injectable()
export class EsService extends GenericService<EsPatient, string> {

  constructor(http: Http, authService: AuthService) {
    super(http, RequestConst.PATH_TO_ES_API, authService);
  }

  getEmployeePatients(): any {
    this.refreshToken();

    return this.http.get(
      this.pathToApi,
      this.options
    )
      .map(
        response => response.json()
      );
  }

  searchByPrefix(prefix: string): any {
    this.refreshToken();

    console.log("invoke", prefix);

    return this.http.get(
      this.pathToApi + "/search/client/" + prefix + "/",
      this.options
    )
      .map(
        response => response.json()
      );
  }

}
