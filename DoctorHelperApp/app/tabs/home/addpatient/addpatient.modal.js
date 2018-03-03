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
            templateUrl: "addpatient.modal.html"
        })
    ], AddPatientComponent);
    return AddPatientComponent;
}());
exports.AddPatientComponent = AddPatientComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcGF0aWVudC5tb2RhbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFkZHBhdGllbnQubW9kYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFFMUMsaUVBQXdEO0FBT3hEO0lBQUE7SUFTQSxDQUFDO0lBTkcsc0NBQVEsR0FBUjtRQUNJLElBQUksT0FBTyxHQUFHLElBQUksd0JBQU8sRUFBRSxDQUFDO1FBRTVCLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFSUSxtQkFBbUI7UUFML0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsV0FBVyxFQUFFLHVCQUF1QjtTQUN2QyxDQUFDO09BRVcsbUJBQW1CLENBUy9CO0lBQUQsMEJBQUM7Q0FBQSxBQVRELElBU0M7QUFUWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBNb2RhbERpYWxvZ1BhcmFtcyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9kaXJlY3RpdmVzL2RpYWxvZ3NcIjtcclxuaW1wb3J0IHsgUGF0aWVudCB9IGZyb20gXCIuLy4uLy4uL29iamVjdHMvcGF0aWVudC5tb2R1bGVcIlxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJhZGRwYXRpZW50LW1vZGFsXCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJhZGRwYXRpZW50Lm1vZGFsLmh0bWxcIlxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEFkZFBhdGllbnRDb21wb25lbnQge1xyXG4gICAgcHVibGljIGxhc3RuYW1lOiBzdHJpbmc7XHJcbiAgICBcclxuICAgIG5nT25Jbml0KCk6IHZvaWR7XHJcbiAgICAgICAgbGV0IHBhdGllbnQgPSBuZXcgUGF0aWVudCgpO1xyXG5cclxuICAgICAgICBwYXRpZW50LnNldExhc3ROYW1lKHRoaXMubGFzdG5hbWUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibGFzdG5hbWU6IFwiLCBwYXRpZW50LmdldExhc3ROYW1lKCkpO1xyXG4gICAgfVxyXG59Il19