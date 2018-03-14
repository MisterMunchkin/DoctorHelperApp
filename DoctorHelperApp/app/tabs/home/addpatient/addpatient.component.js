"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var patient_module_1 = require("./../../objects/patient.module");
var AddPatientComponent = /** @class */ (function () {
    function AddPatientComponent() {
    }
    AddPatientComponent.prototype.ngOnInit = function () {
        var patient = new patient_module_1.Patient();
        patient.setLastName(this.lastname);
        console.log("lastname: ", patient.getLastName());
    };
    AddPatientComponent = __decorate([
        core_1.Component({
            selector: "addpatient",
            moduleId: module.id,
            templateUrl: "./addpatient.component.html"
        })
    ], AddPatientComponent);
    return AddPatientComponent;
}());
exports.AddPatientComponent = AddPatientComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcGF0aWVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhZGRwYXRpZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQyxpRUFBd0Q7QUFTeEQ7SUFBQTtJQVNBLENBQUM7SUFORyxzQ0FBUSxHQUFSO1FBQ0ksSUFBSSxPQUFPLEdBQUcsSUFBSSx3QkFBTyxFQUFFLENBQUM7UUFFNUIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7SUFDckQsQ0FBQztJQVJRLG1CQUFtQjtRQU4vQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFlBQVk7WUFDdEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSw2QkFBNkI7U0FDN0MsQ0FBQztPQUVXLG1CQUFtQixDQVMvQjtJQUFELDBCQUFDO0NBQUEsQUFURCxJQVNDO0FBVFksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUGF0aWVudCB9IGZyb20gXCIuLy4uLy4uL29iamVjdHMvcGF0aWVudC5tb2R1bGVcIlxyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImFkZHBhdGllbnRcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2FkZHBhdGllbnQuY29tcG9uZW50Lmh0bWxcIlxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEFkZFBhdGllbnRDb21wb25lbnQge1xyXG4gICAgcHVibGljIGxhc3RuYW1lOiBzdHJpbmc7XHJcbiAgICBcclxuICAgIG5nT25Jbml0KCk6IHZvaWR7XHJcbiAgICAgICAgbGV0IHBhdGllbnQgPSBuZXcgUGF0aWVudCgpO1xyXG5cclxuICAgICAgICBwYXRpZW50LnNldExhc3ROYW1lKHRoaXMubGFzdG5hbWUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibGFzdG5hbWU6IFwiLCBwYXRpZW50LmdldExhc3ROYW1lKCkpO1xyXG4gICAgfVxyXG59Il19