
import {Animal} from "./animal";
import {Employee} from "./employee";
export class Patient{
  id: number;
  status: string;
  animal: Animal;
  employee: Employee;
  description: string;
  startDate: Date;
  endDate: Date;
}
