import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentDirectorComponent } from './current-director.component';

describe('CurrentDirectorComponent', () => {
  let component: CurrentDirectorComponent;
  let fixture: ComponentFixture<CurrentDirectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentDirectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentDirectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
