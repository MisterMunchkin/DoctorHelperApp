"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Sqlite = require("nativescript-sqlite");
var PatientsComponent = /** @class */ (function () {
    function PatientsComponent() {
        /* ***********************************************************
        * Use the constructor to inject services.
        *************************************************************/
        var _this = this;
        this.patients = [];
        (new Sqlite("doc.db")).then(function (db) {
            db.execSQL("CREATE TABLE IF NOT EXISTS patients (id INTEGER PRIMARY KEY AUTOINCREMENT, firstname TEXT, lastname, TEXT)").then(function (id) {
                _this.database = db;
            }, function (error) {
                console.log("OPEN DB ERROR", error);
            });
        });
    }
    PatientsComponent.prototype.insert = function () {
        var _this = this;
        this.database.execSQL("INSERT INTO patients (firstname, lastname) VALUES (?,?)", ["Thalia", "Tubs"]).then(function (id) {
            console.log("INSERT RESULT: ", id);
            _this.fetch();
        }, function (error) {
            console.log("INSERT ERROR: ", error);
        });
    };
    PatientsComponent.prototype.fetch = function () {
        var _this = this;
        this.database.all("SELECT * FROM patients").then(function (rows) {
            _this.patients = [];
            for (var row in rows) {
                _this.patients.push({
                    "firstname": rows[row][1],
                    "lastname": rows[row][2]
                });
            }
            console.log("RETRIEVED");
        }, function (error) {
            console.log("SELECT ERROR: ", error);
        });
    };
    PatientsComponent.prototype.ngOnInit = function () {
        /* ***********************************************************
        * Use the "ngOnInit" handler to initialize data for the view.
        *************************************************************/
        this.fetch();
    };
    PatientsComponent = __decorate([
        core_1.Component({
            selector: "Patients",
            moduleId: module.id,
            templateUrl: "./patients.component.html"
        }),
        __metadata("design:paramtypes", [])
    ], PatientsComponent);
    return PatientsComponent;
}());
exports.PatientsComponent = PatientsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF0aWVudHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGF0aWVudHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0FBTzVDO0lBS0k7UUFDSTs7c0VBRThEO1FBSGxFLGlCQWNDO1FBVEcsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFFbkIsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLEVBQUU7WUFDMUIsRUFBRSxDQUFDLE9BQU8sQ0FBQyw0R0FBNEcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLEVBQUU7Z0JBQzVILEtBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1lBQ3ZCLENBQUMsRUFBRSxVQUFBLEtBQUs7Z0JBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDeEMsQ0FBQyxDQUFDLENBQUE7UUFDTixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSxrQ0FBTSxHQUFiO1FBQUEsaUJBT0M7UUFORyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyx5REFBeUQsRUFBRSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLEVBQUU7WUFDeEcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNuQyxLQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDakIsQ0FBQyxFQUFFLFVBQUEsS0FBSztZQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDekMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0saUNBQUssR0FBWjtRQUFBLGlCQWFDO1FBWkcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxJQUFJO1lBQ2pELEtBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1lBQ25CLEdBQUcsQ0FBQSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFBLENBQUM7Z0JBQ2pCLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO29CQUNmLFdBQVcsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN6QixVQUFVLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDM0IsQ0FBQyxDQUFBO1lBQ04sQ0FBQztZQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDN0IsQ0FBQyxFQUFFLFVBQUEsS0FBSztZQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDekMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0Qsb0NBQVEsR0FBUjtRQUNJOztzRUFFOEQ7UUFDL0QsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFqRFEsaUJBQWlCO1FBTDdCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDJCQUEyQjtTQUMzQyxDQUFDOztPQUNXLGlCQUFpQixDQWtEN0I7SUFBRCx3QkFBQztDQUFBLEFBbERELElBa0RDO0FBbERZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxudmFyIFNxbGl0ZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtc3FsaXRlXCIpO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJQYXRpZW50c1wiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vcGF0aWVudHMuY29tcG9uZW50Lmh0bWxcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGF0aWVudHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIHByaXZhdGUgZGF0YWJhc2U6IGFueTtcclxuICAgIHB1YmxpYyBwYXRpZW50czogQXJyYXk8YW55PjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgICAgICogVXNlIHRoZSBjb25zdHJ1Y3RvciB0byBpbmplY3Qgc2VydmljZXMuXHJcbiAgICAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbiAgICAgICAgdGhpcy5wYXRpZW50cyA9IFtdO1xyXG5cclxuICAgICAgICAobmV3IFNxbGl0ZShcImRvYy5kYlwiKSkudGhlbihkYiA9PiB7XHJcbiAgICAgICAgICAgIGRiLmV4ZWNTUUwoXCJDUkVBVEUgVEFCTEUgSUYgTk9UIEVYSVNUUyBwYXRpZW50cyAoaWQgSU5URUdFUiBQUklNQVJZIEtFWSBBVVRPSU5DUkVNRU5ULCBmaXJzdG5hbWUgVEVYVCwgbGFzdG5hbWUsIFRFWFQpXCIpLnRoZW4oaWQgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhYmFzZSA9IGRiO1xyXG4gICAgICAgICAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk9QRU4gREIgRVJST1JcIiwgZXJyb3IpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbnNlcnQoKXtcclxuICAgICAgICB0aGlzLmRhdGFiYXNlLmV4ZWNTUUwoXCJJTlNFUlQgSU5UTyBwYXRpZW50cyAoZmlyc3RuYW1lLCBsYXN0bmFtZSkgVkFMVUVTICg/LD8pXCIsIFtcIlRoYWxpYVwiLCBcIlR1YnNcIl0pLnRoZW4oaWQgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIklOU0VSVCBSRVNVTFQ6IFwiLCBpZCk7XHJcbiAgICAgICAgICAgIHRoaXMuZmV0Y2goKTtcclxuICAgICAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSU5TRVJUIEVSUk9SOiBcIiwgZXJyb3IpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmZXRjaCgpe1xyXG4gICAgICAgIHRoaXMuZGF0YWJhc2UuYWxsKFwiU0VMRUNUICogRlJPTSBwYXRpZW50c1wiKS50aGVuKHJvd3MgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnBhdGllbnRzID0gW107XHJcbiAgICAgICAgICAgIGZvcih2YXIgcm93IGluIHJvd3Mpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYXRpZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBcImZpcnN0bmFtZVwiOiByb3dzW3Jvd11bMV0sXHJcbiAgICAgICAgICAgICAgICAgICAgXCJsYXN0bmFtZVwiOiByb3dzW3Jvd11bMl1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJSRVRSSUVWRURcIik7XHJcbiAgICAgICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNFTEVDVCBFUlJPUjogXCIsIGVycm9yKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICAgICAgKiBVc2UgdGhlIFwibmdPbkluaXRcIiBoYW5kbGVyIHRvIGluaXRpYWxpemUgZGF0YSBmb3IgdGhlIHZpZXcuXHJcbiAgICAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAgICAgIHRoaXMuZmV0Y2goKTtcclxuICAgIH1cclxufVxyXG4iXX0=