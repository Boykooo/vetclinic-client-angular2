import {Animal} from "../entity/animal";
import {GenericService} from "./generic.service";
import {Http} from "@angular/http";
import {RequestConst} from "../util/request-const";
import {AuthService} from "./auth.service";
import {Injectable} from "@angular/core";

@Injectable()
export class AnimalService extends GenericService<Animal, number> {
  constructor(http: Http, authService: AuthService) {
    super(http, RequestConst.PATH_TO_ANIMAL_API, authService);
  }
}
