/* tslint:disable:no-unused-variable */
import {
    async,
    ComponentFixture,
    TestBed
} from '@angular/core/testing';
import { ExampleStepComponent } from './example-step.component';

describe('ExampleStepComponent', () => {
    let component: ExampleStepComponent;
    let fixture: ComponentFixture<ExampleStepComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                ExampleStepComponent
            ]
        });
        TestBed.compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ExampleStepComponent);
        component = fixture.componentInstance;
    });

    it('should create the example-step', () => {
        expect(component).toBeTruthy();
    });
});
