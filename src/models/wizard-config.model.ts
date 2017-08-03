import { WizardStepConfig } from './wizard-step-config.model';

export interface WizardConfig {
    initialContext: any;
    entryPoint: string;
    steps: { [id: string]: WizardStepConfig };
    cancel?: any;
    nextLabel: string;
    finishLabel: string;
    cancelLabel: string;
}
