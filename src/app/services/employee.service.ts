
import {Employee} from "../entity/employee";
import {Http} from "@angular/http";
import {GenericService} from "./generic.service";
import {RequestConst} from "../util/request-const";
import {Injectable} from "@angular/core";

@Injectable()
export class EmployeeService extends GenericService<Employee, String>{
  constructor(http: Http) {
    super(http, RequestConst.pathToEmployeeApi);
  }
}
