import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ExampleComponent } from './example.component';
import { NgxWizardModule } from '../index';
import { ExampleStepComponent } from './example-step/example-step.component';

@NgModule({
    declarations: [
        ExampleComponent,
        ExampleStepComponent
    ],
    imports: [
        BrowserModule,
        NgxWizardModule
    ],
    providers: [],
    bootstrap: [ExampleComponent],
    entryComponents: [ExampleStepComponent]
})
export class ExampleModule { }
