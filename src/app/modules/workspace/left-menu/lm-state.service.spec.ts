import { TestBed } from '@angular/core/testing';

import { LmStateService } from './lm-state.service';

describe('LmStateService', () => {
    let service: LmStateService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [LmStateService]
        });
        service = TestBed.inject(LmStateService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
