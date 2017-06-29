import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';

export class GenericService<Entity, PK> {
  private pathToApi: string;
  private http: Http;
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(http: Http, pathToApi: string) {
    this.pathToApi = pathToApi;
    this.http = http;
  }

  getAll(): Promise<Entity[]> {
    return this.http.get(this.pathToApi)
      .toPromise()
      .then(response => {
        let body = response.json();
        return body || null;
      });
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
      .delete(this.pathToApi + '/' + key +'/',
        this.headers,
      )
      .toPromise()
      .then(res => console.log(res));
  }
}
