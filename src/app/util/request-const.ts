import {Headers} from "@angular/http";

export class RequestConst {
  public static PATH_TO_EMPLOYEE_API = 'http://localhost:8080/api/employee';
  public static PATH_TO_AUTH_API = 'http://localhost:8080/auth';
  public static PATH_TO_USER_API = 'http://localhost:8080/api/client';
  public static PATH_TO_ANIMAL_API = 'http://localhost:8080/api/animal';
  public static PATH_TO_PATIENT_API = 'http://localhost:8080/api/patient';
  public static PATH_TO_ES_API = 'http://localhost:8080/api/es';
  public static AUTH_HEADER = 'X-Auth-Token';
  public static PATH_TO_ADMIN_AUTH = 'http://localhost:8080/auth/admin';
  public static PATH_TO_USER_AUTH = 'http://localhost:8080/auth/client';
  public static EMPLOYEE_TOKEN = "eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiJlbXBsb3llZUB2ZXRjbGluaWMucnUiLCJleHAiOjE1MzA4NjkwMzh9.7jC1aiCc4vYzCPWpxJzO15hA8q-VCSUfPDshIBLt4fXnFZnV69cktsS7yF3nNRmMOtA9SgZ30-peSNRlC3Q8KA";
  public static PATH_TO_ISSUE_API = "http://localhost:8080/api/issue";

  public static BASE_HEADERS = new Headers({'Content-Type': 'application/json'});

    // .append(RequestConst.AUTH_HEADER, "");
}

