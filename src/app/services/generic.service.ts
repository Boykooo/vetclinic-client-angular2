import {Http} from "@angular/http";
import 'rxjs/add/operator/map'
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";
import {OnInit} from "@angular/core";
import {AuthService} from "./auth.service";
import {RequestConst} from "../util/request-const";

export class GenericService<Entity, PK> {

  private pathToApi: string;
  private http: Http;
  private headers;
  private authService: AuthService;

  constructor(http: Http, pathToApi: string, authService: AuthService) {
    this.pathToApi = pathToApi;
    this.http = http;
    this.authService = authService;
    this.headers = RequestConst.baseHeaders;
    this.headers.append(RequestConst.authHeader, this.authService.getToken());
  }

  getAll(): Observable<Entity[]> {
    this.refreshToken();

    return this.http.get(this.pathToApi)
      .map(response => response.json());
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
    this.headers.set(RequestConst.authHeader, this.authService.getToken());
  }
}
