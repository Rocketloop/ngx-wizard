import {
    Component, EventEmitter
} from '@angular/core';
import { WizardStep } from '../../index';
import { NgxWizardStepComponent } from '../../index';

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
