import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastConductorsComponent } from './past-conductors.component';

describe('PastConductorsComponent', () => {
  let component: PastConductorsComponent;
  let fixture: ComponentFixture<PastConductorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastConductorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PastConductorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
