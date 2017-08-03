import {
    Component, EventEmitter
} from '@angular/core';
import { WizardStep } from '../../src/models/wizard-step.model';
import { NgxWizardStepComponent } from '../../src/ngx-wizard-step/ngx-wizard-step.component';

@Component({
    selector: 'example-step',
    styles: [``],
    template: `<p>This is a step</p>`
})
export class ExampleStepComponent extends NgxWizardStepComponent {

    onAction(): void {
        this.contextChanged.next({ 'success': true });
        this.done.next();
    }

}
