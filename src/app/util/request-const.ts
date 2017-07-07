import {Headers} from "@angular/http";

export class RequestConst {
  public static pathToEmployeeApi = 'http://localhost:8080/api/employee';
  public static pathToUserApi = 'http://localhost:8080/api/user';
  public static authHeader = 'X-Auth-Token';
  public static pathToAdminAuth = 'http://localhost:8080/auth/admin';
  public static pathToUserAuth = 'http://localhost:8080/auth/user';
  public static employeeToken = "eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiJlbXBsb3llZUB2ZXRjbGluaWMucnUiLCJleHAiOjE1MzA4NjkwMzh9.7jC1aiCc4vYzCPWpxJzO15hA8q-VCSUfPDshIBLt4fXnFZnV69cktsS7yF3nNRmMOtA9SgZ30-peSNRlC3Q8KA";

  public static baseHeaders = new Headers({'Content-Type': 'application/json'});

    // .append(RequestConst.authHeader, "");
}

