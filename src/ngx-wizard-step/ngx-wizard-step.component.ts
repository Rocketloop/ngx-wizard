
import { WizardStep } from '../models/wizard-step.model';
import { EventEmitter } from '@angular/core';

export abstract class NgxWizardStepComponent implements WizardStep {

    context: any;

    performingAction: boolean;

    contextChanged: EventEmitter<any> = new EventEmitter();
    processed: EventEmitter<boolean> = new EventEmitter();
    done: EventEmitter<string> = new EventEmitter();
    error: EventEmitter<any> = new EventEmitter();

    constructor() {}

    abstract onAction(): void;

}
