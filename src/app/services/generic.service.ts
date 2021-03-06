import {Headers, Http, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map'
import {Observable} from "rxjs/Observable";
import {AuthService} from "./auth.service";
import {RequestConst} from "../util/request-const";
import {promise} from "selenium-webdriver";
import map = promise.map;

export class GenericService<Entity, PK> {

  protected pathToApi: string;
  protected http: Http;
  public headers: Headers;
  protected authService: AuthService;
  public options: RequestOptions;

  constructor(http: Http, pathToApi: string, authService: AuthService) {
    this.pathToApi = pathToApi;
    this.http = http;
    this.authService = authService;
    // this.headers = new Headers(RequestConst.BASE_HEADERS);
    this.headers = new Headers();
    // this.headers.append('Access-Control-Allow-Headers', '*');
    this.headers.append(RequestConst.AUTH_HEADER, this.authService.getToken());
    this.options = new RequestOptions({headers: this.headers});
  }

  getAll(): any {
    this.refreshToken();

    return this.http.get(
      this.pathToApi,
      this.options
    )
      .map(response => response.json());
  }

  getInfo(): any {
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

  getInfoById(pk: PK): any {
    this.refreshToken();

    return this.http.get(
      this.pathToApi + '/info/' + pk + "/",
      this.options
    )
      .map(
        response => {
          return response.json()
        }
      );
  }

  addEntity(entity: Entity): any {
    this.refreshToken();

    return this.http
      .post(this.pathToApi,
        entity,
        this.options
      ).map(
        response => {
          return response.json();
        }
      );
  }

  updateEntity(entity: Entity): any {
    this.refreshToken();

    return this.http
      .put(this.pathToApi,
        entity,
        this.options
      )
      .map(
        response =>{
          return response.json();
        }
      );
  }

  deleteEntity(key: PK): any {
    this.refreshToken();

    return this.http
      .delete(this.pathToApi + '/' + key + '/',
        this.options,
      )
      .map(
        response => {
          return response.json()
        }
      );
  }

  getPage(startPage: number, amount: number): any {
    this.refreshToken();

    return this.http.get(
      this.pathToApi + '/page/' + startPage + '/' + amount + '/',
      this.options
    )
      .map(
        response => {
          return response.json()
        }
      );
  }

  getCount(): any {
    this.refreshToken();

    return this.http.get(
      this.pathToApi + "/count",
      this.options
    )
      .map(
        response => response.json()
      )
  }

  refreshToken(): void {

    this.headers = new Headers({'X-Auth-Token': this.authService.getToken()});
    this.options = new RequestOptions({headers: this.headers});

    // this.headers.set(RequestConst.AUTH_HEADER, this.authService.getToken());
    // // this.headers.set(RequestConst.AUTH_HEADER, RequestConst.EMPLOYEE_TOKEN);
    // this.options.headers = this.headers;
  }
}
