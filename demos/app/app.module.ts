import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { FilterModule } from '../../src/directives/filter';

import {

    IgInput, CarouselModule , CheckboxModule, SwitchModule,
    IgRadioModule , TabBarModule , ListModule, ButtonModule, Label,
    AvatarModule

} from "../../src/main";

import { AppComponent } from "./app.component";
import { InputSampleComponent } from "./inputsample.component";
import { CarouselSampleComponent } from "./carouselsample.component";
import { TabBarSampleComponent } from "./tabbarsample.component";
import { ListSampleComponent } from "./listsample.component";
import { ButtonsSampleComponent } from "./buttonssample.component";
import { AvatarSampleComponent } from "./avatarsample.component";
import { NavDrawerSampleModule } from "./navigation-drawer/sample.module";

import { routing } from "./app.routing";


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        CarouselModule,
        CheckboxModule,
        SwitchModule,
        IgRadioModule,
        TabBarModule,
        ListModule,
        ButtonModule,
        AvatarModule,
        FilterModule,
        NavDrawerSampleModule,
        routing
    ],
    declarations: [
        IgInput,
        AppComponent,
        InputSampleComponent,
        CarouselSampleComponent,
        TabBarSampleComponent,
        ListSampleComponent,
        Label,
        ButtonsSampleComponent,
        AvatarSampleComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}