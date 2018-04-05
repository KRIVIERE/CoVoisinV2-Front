import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationLateraleComponent } from './navigation-laterale.component';

describe('NavigationLateraleComponent', () => {
  let component: NavigationLateraleComponent;
  let fixture: ComponentFixture<NavigationLateraleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationLateraleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationLateraleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
