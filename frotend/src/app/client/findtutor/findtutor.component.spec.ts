import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindtutorComponent } from './findtutor.component';

describe('FindtutorComponent', () => {
  let component: FindtutorComponent;
  let fixture: ComponentFixture<FindtutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindtutorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindtutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
