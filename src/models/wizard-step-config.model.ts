import { Observable } from 'rxjs/Observable';

export interface WizardStepConfig {
    component: any;
    title: string | Observable<string>;
    subtitle: string | Observable<string>;
    cancellable: boolean;
    waitForAction?: boolean;
    actionsVisible: boolean;
    next?: { [id: string]: string } | string;
}
