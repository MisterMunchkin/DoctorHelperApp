import { Component } from "@angular/core";
import { Patient } from "./../../objects/patient.module"
import { NativeScriptRouterModule } from "nativescript-angular/router";

@Component({
    selector: "addpatient",
    moduleId: module.id,
    templateUrl: "./addpatient.component.html"
})

export class AddPatientComponent {
    public lastname: string;
    
    ngOnInit(): void{
        let patient = new Patient();

        patient.setLastName(this.lastname);
        console.log("lastname: ", patient.getLastName());
    }
}