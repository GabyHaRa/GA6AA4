import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcseComponent } from './acse.component';

describe('AcseComponent', () => {
  let component: AcseComponent;
  let fixture: ComponentFixture<AcseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
