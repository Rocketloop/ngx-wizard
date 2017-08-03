import { EventEmitter } from '@angular/core';

export interface WizardStep {

    context: any;
    contextChanged: any;
    performingAction: boolean;
    processed: EventEmitter<boolean>;
    done: EventEmitter<string>;
    error: EventEmitter<any>;

    onAction(): void;

}
