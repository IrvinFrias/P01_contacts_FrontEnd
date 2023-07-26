import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralFooterComponent } from './general-footer.component';

describe('GeneralFooterComponent', () => {
  let component: GeneralFooterComponent;
  let fixture: ComponentFixture<GeneralFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeneralFooterComponent]
    });
    fixture = TestBed.createComponent(GeneralFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
