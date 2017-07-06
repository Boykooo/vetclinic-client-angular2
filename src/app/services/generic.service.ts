import {Headers, Http, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map'
import {Observable} from "rxjs/Observable";
import {AuthService} from "./auth.service";
import {RequestConst} from "../util/request-const";

export class GenericService<Entity, PK> {

  private pathToApi: string;
  private http: Http;
  private headers: Headers ;
  private authService: AuthService;
  private options: RequestOptions;

  constructor(http: Http, pathToApi: string, authService: AuthService) {
    this.pathToApi = pathToApi;
    this.http = http;
    this.authService = authService;
    this.headers = RequestConst.baseHeaders;
    this.headers.append('Access-Control-Allow-Headers', '*');
    this.headers.append(RequestConst.authHeader, this.authService.getToken());
    this.options = new RequestOptions({ headers: this.headers})
  }

  getAll(): Observable<Entity[]> {
    this.refreshToken();

    return this.http.get(
      this.pathToApi,
      this.options
    )
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
    // this.headers.set(RequestConst.authHeader, RequestConst.employeeToken);
    this.options.headers = this.headers;
  }
}
