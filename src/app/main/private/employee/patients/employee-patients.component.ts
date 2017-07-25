import {Component, OnInit} from "@angular/core";
import {Patient} from "../../../../entities/patient";
import {PatientService} from "../../../../services/patient.service";
import {EmployeeService} from "../../../../services/employee.service";
import {AnimalService} from "../../../../services/animal.service";
import {forEach} from "@angular/router/src/utils/collection";
import {Router} from "@angular/router";
import {PagerService} from "../../../../services/pager-service.service";


@Component({
  selector: "employee-patients",
  templateUrl: "./employee-patients.component.html"
})

export class EmployeePatientsComponent implements OnInit {

  pagedPatients: Patient[];
  clientNames = {};

  patientsCount: number;

  // pager object
  pager: any = {};

  constructor(private patientService: PatientService,
              private employeeService: EmployeeService,
              private animalService: AnimalService,
              private router: Router,
              private pagerService: PagerService) {
  }

  ngOnInit(): void {

    this.pagedPatients = [];

    this.patientService.getCount()
      .subscribe(
        response => {
          if (response["status"] === "OK") {
            this.patientsCount = response["data"];

            this.setPage(1);
          } else {
            console.log(response["error"]);
          }
        }
      );
  }

  setPage(page: number): void {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }

    // get pager object from service
    this.pager = this.pagerService.getPager(this.patientsCount, page);

    this.patientService.getLimit(this.pager.currentPage - 1, this.pager.amount)
      .subscribe(
        response => {
          if (response["status"] === "OK") {
            this.pagedPatients = response["data"];
          } else {
            console.log(response["error"]);
          }
        }
      );
  }

  showDetails(patient: Patient) {
    this.router.navigate(['/employee/patients', patient.id]);
  }

  getClientName(animalId: number): string {
    return this.clientNames[animalId];
  }
}
