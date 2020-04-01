import { Observable } from 'rxjs/Observable';

export interface WizardStepConfig {
    component: any;
    title: string | Observable<string>;
    subtitle: string | Observable<string>;
    cancellable: boolean;
    waitForAction?: boolean;
    actionsVisible: boolean;
    buttonStyle?: WizardStepButtonStyle;
    next?: { [id: string]: string } | string;
}

export interface WizardStepButtonStyle {
    text: string | Observable<string>;
    textColor?: string;
    backgroundColor?: string;
}
