import {Http} from "@angular/http";
import 'rxjs/add/operator/map'
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";

export class GenericService<Entity, PK> {
  private pathToApi: string;
  private http: Http;
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(http: Http, pathToApi: string) {
    this.pathToApi = pathToApi;
    this.http = http;
  }

  getAll(): Observable<Entity[]> {
    return this.http.get(this.pathToApi)
      .map(response => response.json());


    // .toPromise()
    // .then(response => {
    //   let body = response.json();
    //   return body || null;
    // });
  }

  addEntity(entity: Entity): void {
    this.http
      .post(this.pathToApi,
        entity,
        this.headers
      )
      .toPromise()
      .then(res => console.log(res));
  }

  updateEntity(entity: Entity): void {
    this.http
      .put(this.pathToApi,
        entity,
        this.headers
      )
      .toPromise()
      .then(res => console.log(res));
  }

  deleteEntity(key: PK): void {
    this.http
      .delete(this.pathToApi + '/' + key + '/',
        this.headers,
      )
      .toPromise()
      .then(res => console.log(res));
  }
}
