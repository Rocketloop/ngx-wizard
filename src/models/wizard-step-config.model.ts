export interface WizardStepConfig {
    component: any;
    title: string;
    subtitle: string;
    cancellable: boolean;
    waitForAction?: boolean;
    actionsVisible: boolean;
    next?: { [id: string]: string } | string;
}
