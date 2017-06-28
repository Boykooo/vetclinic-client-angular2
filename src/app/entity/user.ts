import {Animal} from "./animal";

export class User {
  email: string;
  phoneNumber: string;
  firstName: string;
  lastName: string;
  regDate: Date;
  password: string;
  animals: Animal[];
}
