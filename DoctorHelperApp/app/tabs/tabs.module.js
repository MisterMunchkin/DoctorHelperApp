"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var browse_component_1 = require("./browse/browse.component");
var home_component_1 = require("./home/home.component");
var search_component_1 = require("./search/search.component");
var tabs_routing_module_1 = require("./tabs-routing.module");
var tabs_component_1 = require("./tabs.component");
var addpatient_component_1 = require("./home/addpatient/addpatient.component");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var TabsModule = /** @class */ (function () {
    function TabsModule() {
    }
    TabsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                tabs_routing_module_1.TabsRoutingModule
            ],
            declarations: [
                tabs_component_1.TabsComponent,
                home_component_1.HomeComponent,
                browse_component_1.BrowseComponent,
                search_component_1.SearchComponent,
                addpatient_component_1.AddPatientComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ],
            providers: [
                modal_dialog_1.ModalDialogService
            ],
            entryComponents: [
                addpatient_component_1.AddPatientComponent
            ]
        })
    ], TabsModule);
    return TabsModule;
}());
exports.TabsModule = TabsModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0YWJzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxzREFBdUU7QUFFdkUsOERBQTREO0FBQzVELHdEQUFzRDtBQUN0RCw4REFBNEQ7QUFDNUQsNkRBQTBEO0FBQzFELG1EQUFpRDtBQUNqRCwrRUFBNkU7QUFDN0Usa0VBQXVFO0FBMEJ2RTtJQUFBO0lBQTBCLENBQUM7SUFBZCxVQUFVO1FBdEJ0QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wsaUNBQXdCO2dCQUN4Qix1Q0FBaUI7YUFDcEI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsOEJBQWE7Z0JBQ2IsOEJBQWE7Z0JBQ2Isa0NBQWU7Z0JBQ2Ysa0NBQWU7Z0JBQ2YsMENBQW1CO2FBQ3RCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtZQUNELFNBQVMsRUFBRTtnQkFDUCxpQ0FBa0I7YUFDckI7WUFDRCxlQUFlLEVBQUU7Z0JBQ2IsMENBQW1CO2FBQ3RCO1NBQ0osQ0FBQztPQUNXLFVBQVUsQ0FBSTtJQUFELGlCQUFDO0NBQUEsQUFBM0IsSUFBMkI7QUFBZCxnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xyXG5cclxuaW1wb3J0IHsgQnJvd3NlQ29tcG9uZW50IH0gZnJvbSBcIi4vYnJvd3NlL2Jyb3dzZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gXCIuL2hvbWUvaG9tZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgU2VhcmNoQ29tcG9uZW50IH0gZnJvbSBcIi4vc2VhcmNoL3NlYXJjaC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVGFic1JvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi90YWJzLXJvdXRpbmcubW9kdWxlXCI7XHJcbmltcG9ydCB7IFRhYnNDb21wb25lbnQgfSBmcm9tIFwiLi90YWJzLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBBZGRQYXRpZW50Q29tcG9uZW50IH0gZnJvbSBcIi4vaG9tZS9hZGRwYXRpZW50L2FkZHBhdGllbnQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2dcIjtcclxuXHJcblxyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXHJcbiAgICAgICAgVGFic1JvdXRpbmdNb2R1bGVcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBUYWJzQ29tcG9uZW50LFxyXG4gICAgICAgIEhvbWVDb21wb25lbnQsXHJcbiAgICAgICAgQnJvd3NlQ29tcG9uZW50LFxyXG4gICAgICAgIFNlYXJjaENvbXBvbmVudCxcclxuICAgICAgICBBZGRQYXRpZW50Q29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgc2NoZW1hczogW1xyXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcclxuICAgIF0sXHJcbiAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICBNb2RhbERpYWxvZ1NlcnZpY2VcclxuICAgIF0sXHJcbiAgICBlbnRyeUNvbXBvbmVudHM6IFtcclxuICAgICAgICBBZGRQYXRpZW50Q29tcG9uZW50XHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUYWJzTW9kdWxlIHsgfVxyXG4iXX0=