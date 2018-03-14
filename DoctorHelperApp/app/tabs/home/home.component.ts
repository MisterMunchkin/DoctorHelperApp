import { Component, OnInit, ViewContainerRef } from "@angular/core";
var Sqlite = require("nativescript-sqlite");
import { registerElement } from "nativescript-angular/element-registry";
import { Fab } from "nativescript-floatingactionbutton";
import { ModalDialogService } from "nativescript-angular/directives/dialogs";
import { AddPatientComponent } from "./addpatient/addpatient.modal";
import { Patient } from "./../objects/patient.module";

registerElement("Fab", () => Fab);



@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    private database: any;
    public patients: Array<any>;
    public patientObject = new Patient();
    

    constructor(private modal: ModalDialogService, private vcRef: ViewContainerRef) {
        /* ***********************************************************
        * Use the constructor to inject services.
        *************************************************************/

        this.patients = [];

        (new Sqlite("doc.db")).then(db => {
            db.execSQL("CREATE TABLE IF NOT EXISTS patients (id INTEGER PRIMARY KEY AUTOINCREMENT, firstname TEXT, lastname, TEXT)").then(id => {
                this.database = db;
            }, error => {
                console.log("OPEN DB ERROR", error);
            })
        });
    }

    public insert(){

        this.database.execSQL("INSERT INTO patients (firstname, lastname) VALUES (?,?)", [this.patientObject.getFirstName, this.patientObject.getLastName]).then(id => {
            console.log("INSERT RESULT: ", id);
            this.fetch();
        }, error => {
            console.log("INSERT ERROR: ", error);
        });
    }

    public fetch(){
        this.database.all("SELECT * FROM patients").then(rows => {
            this.patients = [];
            for(var row in rows){
                this.patients.push({
                    "firstname": rows[row][1],
                    "lastname": rows[row][2]
                })
            }
            console.log("RETRIEVED");
        }, error => {
            console.log("SELECT ERROR: ", error);
        });
    }
    ngOnInit(): void {
        /* ***********************************************************
        * Use the "ngOnInit" handler to initialize data for the view.
        *************************************************************/
       this.fetch();
    }

    /**
     * showModal
     */
    public showModal() {
        console.log("<<<<<fab button clicked...");

        
    }
}
