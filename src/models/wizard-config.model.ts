import { WizardStepConfig } from './wizard-step-config.model';
import { Observable } from 'rxjs/Observable';

export interface WizardConfig {
    initialContext: any;
    entryPoint: string;
    steps: { [id: string]: WizardStepConfig };
    cancel?: any;
    nextLabel: string | Observable<string>;
    finishLabel: string | Observable<string>;
    cancelLabel: string | Observable<string>;
}
