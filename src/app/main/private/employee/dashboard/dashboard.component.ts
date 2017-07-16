import {Component, OnInit} from "@angular/core";
import {Patient} from "../../../../entities/patient";
import {PatientService} from "../../../../services/patient.service";

@Component({
  selector: "dashboard",
  templateUrl: "./dashboard.component.html"
})

export class DashboardComponent implements OnInit {

  patients: Patient[];

  constructor(private patientService: PatientService) {

  }

  ngOnInit(): void {
    this.patientService.getAll()
      .subscribe(
        response => {
          if (response["status"] === "OK") {
            this.patients = response["data"];
          }
          else {
            console.log(response["error"]);
          }
        }
      )
  }
}
