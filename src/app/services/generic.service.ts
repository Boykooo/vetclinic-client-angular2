import {Headers, Http, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map'
import {Observable} from "rxjs/Observable";
import {AuthService} from "./auth.service";
import {RequestConst} from "../util/request-const";
import {promise} from "selenium-webdriver";
import map = promise.map;

export class GenericService<Entity, PK> {

  private pathToApi: string;
  private http: Http;
  private headers: Headers;
  private authService: AuthService;
  private options: RequestOptions;

  constructor(http: Http, pathToApi: string, authService: AuthService) {
    this.pathToApi = pathToApi;
    this.http = http;
    this.authService = authService;
    this.headers = RequestConst.BASE_HEADERS;
    this.headers.append('Access-Control-Allow-Headers', '*');
    this.headers.append(RequestConst.AUTH_HEADER, this.authService.getToken());
    this.options = new RequestOptions({headers: this.headers})
  }

  getAll(): Observable<Entity[]> {
    this.refreshToken();

    return this.http.get(
      this.pathToApi,
      this.options
    )
      .map(response => response.json());
  }

  getInfo(): Observable<Entity> {
    this.refreshToken();

    return this.http.get(
      this.pathToApi + '/info/',
      this.options
    )
      .map(
        response => {
          return response.json()
        }
      );
  }

  addEntity(entity: Entity): void {
    this.refreshToken();

    this.http
      .post(this.pathToApi,
        entity,
        this.headers
      );
  }

  updateEntity(entity: Entity): void {
    this.refreshToken();

    this.http
      .put(this.pathToApi,
        entity,
        this.headers
      );
  }

  deleteEntity(key: PK): void {
    this.refreshToken();

    this.http
      .delete(this.pathToApi + '/' + key + '/',
        this.headers,
      );
  }

  refreshToken(): void {
    this.headers.set(RequestConst.AUTH_HEADER, this.authService.getToken());
    // this.headers.set(RequestConst.AUTH_HEADER, RequestConst.EMPLOYEE_TOKEN);
    this.options.headers = this.headers;
  }
}
