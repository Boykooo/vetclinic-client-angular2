
import {Employee} from "../entities/employee";
import {Http} from "@angular/http";
import {GenericService} from "./generic.service";
import {RequestConst} from "../util/request-const";
import {Injectable} from "@angular/core";
import {AuthService} from "./auth.service";

@Injectable()
export class EmployeeService extends GenericService<Employee, String>{
  constructor(http: Http, authService: AuthService) {
    super(http, RequestConst.PATH_TO_EMPLOYEE_API, authService);
  }
}
