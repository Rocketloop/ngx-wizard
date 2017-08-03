import { Component } from '@angular/core';
import { WizardConfig } from '../index';
import { ExampleStepComponent } from './example-step/example-step.component';

@Component({
    selector: 'example-root',
    templateUrl: './example.component.html',
    styleUrls: []
})
export class ExampleComponent {

    exampleWizardConfig: WizardConfig = {
        initialContext: {},
        entryPoint: 'step1',
        steps: {
            'step1': {
                component: ExampleStepComponent,
                title: 'Step 1',
                subtitle: 'This is the first step in the example wizard.',
                cancellable: false,
                actionsVisible: true,
                next: 'step2'
            },
            'step2': {
                component: ExampleStepComponent,
                title: 'Step 2',
                subtitle: 'This is the second step in the example wizard.',
                cancellable: true,
                actionsVisible: true,
                next: null
            }
        },
        nextLabel: 'Next',
        finishLabel: 'Finish',
        cancelLabel: 'Cancel'
    };

    result: any = null;
    canceled: boolean;

    constructor() {

    }

    onFinish(result: any) {
        this.result = result;
    }

    onCancel() {
        this.canceled = true;
    }

}
