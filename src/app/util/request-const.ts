export class RequestConst {
  public static pathToEmployeeApi = 'http://localhost:8080/api/employee';
  public static pathToUserApi = 'http://localhost:8080/api/user';
  public static authHeader = 'X-Auth-Token';
  public static pathToEmployeeAuth = 'http://localhost:8080/api/auth/employee';
  public static pathToUserAuth = 'http://localhost:8080/api/auth/user';

  public static baseHeaders = new Headers({'Content-Type': 'application/json'});
    // .append(RequestConst.authHeader, "");
}
