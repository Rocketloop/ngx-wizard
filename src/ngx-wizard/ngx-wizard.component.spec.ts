/* tslint:disable:no-unused-variable */
import {
    async,
    ComponentFixture,
    TestBed
} from '@angular/core/testing';
import { NgxWizardComponent } from './ngx-wizard.component';

describe('NgxWizardComponent', () => {
    let component: NgxWizardComponent;
    let fixture: ComponentFixture<NgxWizardComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                NgxWizardComponent
            ]
        });
        TestBed.compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NgxWizardComponent);
        component = fixture.componentInstance;
    });

    it('should create the ngx-wizard', () => {
        expect(component).toBeTruthy();
    });
});
