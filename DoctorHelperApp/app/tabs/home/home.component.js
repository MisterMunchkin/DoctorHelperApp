"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Sqlite = require("nativescript-sqlite");
var element_registry_1 = require("nativescript-angular/element-registry");
var nativescript_floatingactionbutton_1 = require("nativescript-floatingactionbutton");
var router_1 = require("@angular/router");
element_registry_1.registerElement("Fab", function () { return nativescript_floatingactionbutton_1.Fab; });
var HomeComponent = /** @class */ (function () {
    function HomeComponent(router) {
        /* ***********************************************************
        * Use the constructor to inject services.
        *************************************************************/
        var _this = this;
        this.router = router;
        this.patients = [];
        (new Sqlite("doc.db")).then(function (db) {
            db.execSQL("CREATE TABLE IF NOT EXISTS patients (id INTEGER PRIMARY KEY AUTOINCREMENT, firstname TEXT, lastname, TEXT)").then(function (id) {
                _this.database = db;
            }, function (error) {
                console.log("OPEN DB ERROR", error);
            });
        });
    }
    HomeComponent.prototype.insert = function () {
        var _this = this;
        this.database.execSQL("INSERT INTO patients (firstname, lastname) VALUES (?,?)", ["Thalia", "Tubs"]).then(function (id) {
            console.log("INSERT RESULT: ", id);
            _this.fetch();
        }, function (error) {
            console.log("INSERT ERROR: ", error);
        });
    };
    HomeComponent.prototype.fetch = function () {
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
    HomeComponent.prototype.ngOnInit = function () {
        /* ***********************************************************
        * Use the "ngOnInit" handler to initialize data for the view.
        *************************************************************/
        this.fetch();
    };
    /**
     * showModal
     */
    HomeComponent.prototype.redirectAddPatient = function () {
        console.log("<<<<<fab button clicked...");
        this.router.navigate(["addpatient"]);
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "Home",
            moduleId: module.id,
            templateUrl: "./home.component.html"
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE4RTtBQUM5RSxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQztBQUM1QywwRUFBd0U7QUFDeEUsdUZBQXdEO0FBSXhELDBDQUF5QztBQUV6QyxrQ0FBZSxDQUFDLEtBQUssRUFBRSxjQUFNLE9BQUEsdUNBQUcsRUFBSCxDQUFHLENBQUMsQ0FBQztBQVFsQztJQU9JLHVCQUFvQixNQUFjO1FBQzlCOztzRUFFOEQ7UUFIbEUsaUJBY0M7UUFkbUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUs5QixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUVuQixDQUFDLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsRUFBRTtZQUMxQixFQUFFLENBQUMsT0FBTyxDQUFDLDRHQUE0RyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsRUFBRTtnQkFDNUgsS0FBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7WUFDdkIsQ0FBQyxFQUFFLFVBQUEsS0FBSztnQkFDSixPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUN4QyxDQUFDLENBQUMsQ0FBQTtRQUNOLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLDhCQUFNLEdBQWI7UUFBQSxpQkFPQztRQU5HLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLHlEQUF5RCxFQUFFLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsRUFBRTtZQUN4RyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ25DLEtBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNqQixDQUFDLEVBQUUsVUFBQSxLQUFLO1lBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN6QyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSw2QkFBSyxHQUFaO1FBQUEsaUJBYUM7UUFaRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLElBQUk7WUFDakQsS0FBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7WUFDbkIsR0FBRyxDQUFBLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLENBQUEsQ0FBQztnQkFDakIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7b0JBQ2YsV0FBVyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3pCLFVBQVUsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUMzQixDQUFDLENBQUE7WUFDTixDQUFDO1lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM3QixDQUFDLEVBQUUsVUFBQSxLQUFLO1lBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN6QyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDRCxnQ0FBUSxHQUFSO1FBQ0k7O3NFQUU4RDtRQUMvRCxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUVEOztPQUVHO0lBQ0ksMENBQWtCLEdBQXpCO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1FBRTFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBNURRLGFBQWE7UUFMekIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsdUJBQXVCO1NBQ3ZDLENBQUM7eUNBUThCLGVBQU07T0FQekIsYUFBYSxDQTZEekI7SUFBRCxvQkFBQztDQUFBLEFBN0RELElBNkRDO0FBN0RZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDb250YWluZXJSZWYsIE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxudmFyIFNxbGl0ZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtc3FsaXRlXCIpO1xyXG5pbXBvcnQgeyByZWdpc3RlckVsZW1lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZWxlbWVudC1yZWdpc3RyeVwiO1xyXG5pbXBvcnQgeyBGYWIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWZsb2F0aW5nYWN0aW9uYnV0dG9uXCI7XHJcblxyXG5pbXBvcnQgeyBBZGRQYXRpZW50Q29tcG9uZW50IH0gZnJvbSBcIi4vYWRkcGF0aWVudC9hZGRwYXRpZW50LmNvbXBvbmVudFwiO1xyXG5cclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxucmVnaXN0ZXJFbGVtZW50KFwiRmFiXCIsICgpID0+IEZhYik7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJIb21lXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ob21lLmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIHByaXZhdGUgZGF0YWJhc2U6IGFueTtcclxuICAgIHB1YmxpYyBwYXRpZW50czogQXJyYXk8YW55PjtcclxuXHJcbiAgICBcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XHJcbiAgICAgICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgICAgICAqIFVzZSB0aGUgY29uc3RydWN0b3IgdG8gaW5qZWN0IHNlcnZpY2VzLlxyXG4gICAgICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG4gICAgICAgIHRoaXMucGF0aWVudHMgPSBbXTtcclxuXHJcbiAgICAgICAgKG5ldyBTcWxpdGUoXCJkb2MuZGJcIikpLnRoZW4oZGIgPT4ge1xyXG4gICAgICAgICAgICBkYi5leGVjU1FMKFwiQ1JFQVRFIFRBQkxFIElGIE5PVCBFWElTVFMgcGF0aWVudHMgKGlkIElOVEVHRVIgUFJJTUFSWSBLRVkgQVVUT0lOQ1JFTUVOVCwgZmlyc3RuYW1lIFRFWFQsIGxhc3RuYW1lLCBURVhUKVwiKS50aGVuKGlkID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YWJhc2UgPSBkYjtcclxuICAgICAgICAgICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJPUEVOIERCIEVSUk9SXCIsIGVycm9yKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW5zZXJ0KCl7XHJcbiAgICAgICAgdGhpcy5kYXRhYmFzZS5leGVjU1FMKFwiSU5TRVJUIElOVE8gcGF0aWVudHMgKGZpcnN0bmFtZSwgbGFzdG5hbWUpIFZBTFVFUyAoPyw/KVwiLCBbXCJUaGFsaWFcIiwgXCJUdWJzXCJdKS50aGVuKGlkID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJJTlNFUlQgUkVTVUxUOiBcIiwgaWQpO1xyXG4gICAgICAgICAgICB0aGlzLmZldGNoKCk7XHJcbiAgICAgICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIklOU0VSVCBFUlJPUjogXCIsIGVycm9yKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZmV0Y2goKXtcclxuICAgICAgICB0aGlzLmRhdGFiYXNlLmFsbChcIlNFTEVDVCAqIEZST00gcGF0aWVudHNcIikudGhlbihyb3dzID0+IHtcclxuICAgICAgICAgICAgdGhpcy5wYXRpZW50cyA9IFtdO1xyXG4gICAgICAgICAgICBmb3IodmFyIHJvdyBpbiByb3dzKXtcclxuICAgICAgICAgICAgICAgIHRoaXMucGF0aWVudHMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJmaXJzdG5hbWVcIjogcm93c1tyb3ddWzFdLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibGFzdG5hbWVcIjogcm93c1tyb3ddWzJdXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUkVUUklFVkVEXCIpO1xyXG4gICAgICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJTRUxFQ1QgRVJST1I6IFwiLCBlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICAvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgICAgICogVXNlIHRoZSBcIm5nT25Jbml0XCIgaGFuZGxlciB0byBpbml0aWFsaXplIGRhdGEgZm9yIHRoZSB2aWV3LlxyXG4gICAgICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICAgICB0aGlzLmZldGNoKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBzaG93TW9kYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlZGlyZWN0QWRkUGF0aWVudCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIjw8PDw8ZmFiIGJ1dHRvbiBjbGlja2VkLi4uXCIpO1xyXG5cclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJhZGRwYXRpZW50XCJdKTtcclxuICAgIH1cclxufVxyXG4iXX0=