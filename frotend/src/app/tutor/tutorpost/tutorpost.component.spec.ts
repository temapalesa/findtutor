import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorpostComponent } from './tutorpost.component';

describe('TutorpostComponent', () => {
  let component: TutorpostComponent;
  let fixture: ComponentFixture<TutorpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorpostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutorpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
