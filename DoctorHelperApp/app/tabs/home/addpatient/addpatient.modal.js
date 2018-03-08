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
            selector: "addpatient-modal",
            moduleId: module.id,
            templateUrl: "./addpatient.modal.html"
        })
    ], AddPatientComponent);
    return AddPatientComponent;
}());
exports.AddPatientComponent = AddPatientComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcGF0aWVudC5tb2RhbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFkZHBhdGllbnQubW9kYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFFMUMsaUVBQXdEO0FBUXhEO0lBQUE7SUFTQSxDQUFDO0lBTkcsc0NBQVEsR0FBUjtRQUNJLElBQUksT0FBTyxHQUFHLElBQUksd0JBQU8sRUFBRSxDQUFDO1FBRTVCLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFSUSxtQkFBbUI7UUFOL0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx5QkFBeUI7U0FDekMsQ0FBQztPQUVXLG1CQUFtQixDQVMvQjtJQUFELDBCQUFDO0NBQUEsQUFURCxJQVNDO0FBVFksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTW9kYWxEaWFsb2dQYXJhbXMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzXCI7XHJcbmltcG9ydCB7IFBhdGllbnQgfSBmcm9tIFwiLi8uLi8uLi9vYmplY3RzL3BhdGllbnQubW9kdWxlXCJcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiYWRkcGF0aWVudC1tb2RhbFwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vYWRkcGF0aWVudC5tb2RhbC5odG1sXCJcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBZGRQYXRpZW50Q29tcG9uZW50IHtcclxuICAgIHB1YmxpYyBsYXN0bmFtZTogc3RyaW5nO1xyXG4gICAgXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lke1xyXG4gICAgICAgIGxldCBwYXRpZW50ID0gbmV3IFBhdGllbnQoKTtcclxuXHJcbiAgICAgICAgcGF0aWVudC5zZXRMYXN0TmFtZSh0aGlzLmxhc3RuYW1lKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImxhc3RuYW1lOiBcIiwgcGF0aWVudC5nZXRMYXN0TmFtZSgpKTtcclxuICAgIH1cclxufSJdfQ==