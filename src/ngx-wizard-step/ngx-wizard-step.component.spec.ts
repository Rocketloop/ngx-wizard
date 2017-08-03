/* tslint:disable:no-unused-variable */
import {
    async,
    ComponentFixture,
    TestBed
} from '@angular/core/testing';
import { NgxWizardStepComponent } from './ngx-wizard-step.component';

describe('NgxWizardStepComponent', () => {
    let component: NgxWizardStepComponent;
    let fixture: ComponentFixture<NgxWizardStepComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                NgxWizardStepComponent
            ]
        });
        TestBed.compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NgxWizardStepComponent);
        component = fixture.componentInstance;
    });

    it('should create the ngx-wizard-step', () => {
        expect(component).toBeTruthy();
    });
});
