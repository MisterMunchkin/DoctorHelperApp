// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";

import { AppModule } from "./app.module";

import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { appComponents, appRoutes } from "./app.routing";

@NgModule({
    declarations: [AppComponent, ...appComponents],
    bootstrap: [AppComponent],
    imports: [
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(appRoutes)
    ],
})

class AppComponentModule {

}

platformNativeScriptDynamic().bootstrapModule(AppModule);
