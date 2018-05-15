import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageBodyComponent } from './homepage-body.component';

describe('HomepageBodyComponent', () => {
  let component: HomepageBodyComponent;
  let fixture: ComponentFixture<HomepageBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
