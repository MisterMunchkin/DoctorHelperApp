import { Component } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/directives/dialogs";
import { Patient } from "./../../objects/patient.module"
import { HomeComponent } from "./../home.component";

@Component({
    selector: "addpatient-modal",
    moduleId: module.id,
    templateUrl: "./addpatient.modal.html"
})

export class AddPatientComponent {
    public lastname: string;
    public firstname: string;

    ngOnInit(): void{
        let patient = new Patient();

        patient.setLastName(this.lastname);
        patient.setFirstName(this.firstname);

        console.log("lastname: ", patient.getLastName());
    }
}