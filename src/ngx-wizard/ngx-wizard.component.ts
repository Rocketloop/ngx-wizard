import {
    Component,
    ComponentFactoryResolver,
    ComponentRef,
    ElementRef,
    EventEmitter,
    HostBinding,
    Input,
    OnDestroy,
    OnInit,
    Output,
    ReflectiveInjector,
    Renderer2,
    RendererStyleFlags2,
    ViewChild,
    ViewContainerRef
} from '@angular/core';
import { WizardStepButtonStyle, WizardStepConfig } from '../models/wizard-step-config.model';
import { WizardConfig } from '../models/wizard-config.model';
import { WizardStep } from '../models/wizard-step.model';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'ngx-wizard',
    styleUrls: ['./ngx-wizard.component.scss'],
    templateUrl: './ngx-wizard.component.html'
})
export class NgxWizardComponent implements OnInit, OnDestroy {

    @HostBinding('class.ngz-wizard') ngxWizardClass = true;

    @Input() config: WizardConfig;

    @ViewChild('dynamicComponentContainer', { read: ViewContainerRef }) dynamicComponentContainer: ViewContainerRef;

    @ViewChild('nextButton') nextButton: ElementRef;

    currentComponent = null;
    title: string | Observable<string>;
    subtitle: string | Observable<string>;
    buttonStyle: WizardStepButtonStyle;
    cancellable: boolean;
    waitForAction: boolean;

    nextStepId: string;
    actionLabel: string | Observable<string>;
    cancelLabel: string | Observable<string>;

    _currentStepConfig: WizardStepConfig;
    currentContext: any;
    actionsVisible = true;

    @Output() finish: EventEmitter<any> = new EventEmitter();
    @Output() cancel: EventEmitter<void> = new EventEmitter<void>();

    constructor(private resolver: ComponentFactoryResolver, private renderer: Renderer2) {

    }

    ngOnInit() {
        this.reset();
    }

    ngOnDestroy(): void {
        if (this.currentComponent) {
            this.currentComponent.destroy();
        }
    }

    reset() {
        if (this.config) {
            this.currentContext = { ...this.config.initialContext };
            this.currentStepConfig = this.config.steps[this.config.entryPoint];
            this.updateActionLabel();
        }
    }

    updateActionLabel() {
        if (this._currentStepConfig) {
            setTimeout(() => {
                if (this._currentStepConfig.buttonStyle) {
                    this.actionLabel = this._currentStepConfig.buttonStyle.text;
                    if (!this.waitForAction) {
                        this.setButtonStyle();
                    }
                } else if (this._currentStepConfig.next === null) {
                    this.actionLabel = this.config.finishLabel;
                } else {
                    this.actionLabel = this.config.nextLabel;
                }
            }, 200);
        }
        this.cancelLabel = this.config.cancelLabel;
    }

    onNext() {
        if (this.currentComponent) {
            if (!this.currentComponent.instance.performingAction) {
                this.currentComponent.instance.onAction();
            }
        }
    }

    onNextPage() {
        if (this._currentStepConfig.next === null) {
            this.finish.next(this.currentContext);
        } else {
            if (typeof this._currentStepConfig.next === 'string') {
                this.currentStepConfig = this.config.steps[this._currentStepConfig.next];
            } else {
                if (this.config.steps[this._currentStepConfig.next[this.nextStepId]]) {
                    this.currentStepConfig = this.config.steps[this._currentStepConfig.next[this.nextStepId]];
                } else {
                    this.finish.next(this.currentContext);
                }

            }
            this.updateActionLabel();
        }

    }

    onCancel() {
        this.cancel.next();
    }

    setButtonStyle() {
        if (this._currentStepConfig.buttonStyle) {
            if (this._currentStepConfig.buttonStyle.textColor) {
                this.nextButton.nativeElement.style.setProperty('color',
                    `${this._currentStepConfig.buttonStyle.textColor}`, 'important');
            }

            if (this._currentStepConfig.buttonStyle.backgroundColor) {
                this.nextButton.nativeElement.style.setProperty('background',
                    `${this._currentStepConfig.buttonStyle.backgroundColor}`, 'important');
            }
        }
    }


    @Input()
    set currentStepConfig(data: WizardStepConfig) {
        if (!data) {
            return;
        }
        this._currentStepConfig = data;
        this.actionsVisible = this._currentStepConfig.actionsVisible;

        this.title = data.title;
        this.subtitle = data.subtitle;
        this.cancellable = data.cancellable;
        this.waitForAction = data.waitForAction;
        this.buttonStyle = data.buttonStyle;

        // Inputs need to be in the following format to be resolved properly
        const inputProviders = [];
        const resolvedInputs = ReflectiveInjector.resolve(inputProviders);

        // We create an injector out of the config we want to pass down and this components injector
        const injector = ReflectiveInjector.fromResolvedProviders(resolvedInputs,
            this.dynamicComponentContainer.parentInjector
        );

        // We create a factory out of the component we want to create
        const factory = this.resolver.resolveComponentFactory(data.component);

        // We create the component using the factory and the injector
        const component: ComponentRef<any> = factory.create(injector);

        const instance: WizardStep = component.instance;
        instance.context = this.currentContext;
        if (instance.done && instance.error && instance.contextChanged && instance.processed) {
            instance.done.subscribe(id => {
                if (id === 'reset') {
                    this.reset();
                } else {
                    this.nextStepId = id;
                    this.onNextPage();
                }
            });
            instance.error.subscribe((status) => {
            });
            instance.processed.subscribe(processed => {
                this.waitForAction = !processed;
                if (!this.waitForAction) {
                    this.setButtonStyle();
                }

            });
            instance.contextChanged.subscribe(context => {
                this.currentContext = {
                    ...this.currentContext,
                    ...context
                };
                this.currentComponent.instance.context = this.currentContext;
            });
        }
        if (instance.context) {
            instance.context = this.currentContext;
        }

        // We insert the component into the dom container
        this.dynamicComponentContainer.insert(component.hostView);
        // We can destroy the old component is we like by calling destroy
        if (this.currentComponent) {
            this.currentComponent.destroy();
        }

        this.currentComponent = component;
    }

}
