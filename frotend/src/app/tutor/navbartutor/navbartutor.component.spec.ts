import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbartutorComponent } from './navbartutor.component';

describe('NavbartutorComponent', () => {
  let component: NavbartutorComponent;
  let fixture: ComponentFixture<NavbartutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbartutorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbartutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
