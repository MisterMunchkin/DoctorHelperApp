import { Component, OnInit } from "@angular/core";
var Sqlite = require("nativescript-sqlite");

@Component({
    selector: "Patients",
    moduleId: module.id,
    templateUrl: "./patients.component.html"
})
export class PatientsComponent implements OnInit {

    private database: any;
    public patients: Array<any>;

    constructor() {
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
        this.database.execSQL("INSERT INTO patients (firstname, lastname) VALUES (?,?)", ["Thalia", "Tubs"]).then(id => {
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
}
