import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxWizardComponent } from './ngx-wizard/ngx-wizard.component';
import { MaybeAsyncPipe } from './pipes/maybe-async.pipe';

@NgModule({
    declarations: [
        NgxWizardComponent,
        MaybeAsyncPipe
    ],
    exports: [
        NgxWizardComponent,
        MaybeAsyncPipe
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
