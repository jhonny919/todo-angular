import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPassPageComponent } from './reset-pass-page.component';

describe('PasswordResetPageComponent', () => {
    let component: ResetPassPageComponent;
    let fixture: ComponentFixture<ResetPassPageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ResetPassPageComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ResetPassPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
