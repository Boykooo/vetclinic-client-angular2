import {GenericService} from "./generic.service";
import {Patient} from "../entities/patient";
import {Http} from "@angular/http";
import {RequestConst} from "../util/request-const";
import {AuthService} from "./auth.service";
import {Injectable} from "@angular/core";


@Injectable()
export class PatientService extends GenericService<Patient, number> {

  constructor(http: Http, authService: AuthService) {
    super(http, RequestConst.PATH_TO_PATIENT_API, authService);
  }
}
