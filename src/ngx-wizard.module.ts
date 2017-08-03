import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxWizardComponent } from './ngx-wizard/ngx-wizard.component';

@NgModule({
    declarations: [
        NgxWizardComponent
    ],
    exports: [
        NgxWizardComponent
    ],
    imports: [
        CommonModule
    ]
})
export class NgxWizardModule {
    static forRoot() {
        return {
            ngModule: NgxWizardModule,
            providers: []
        };
    }
}
