import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientpostComponent } from './clientpost.component';

describe('ClientpostComponent', () => {
  let component: ClientpostComponent;
  let fixture: ComponentFixture<ClientpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientpostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
