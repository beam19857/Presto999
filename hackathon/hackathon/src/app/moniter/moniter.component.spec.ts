import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoniterComponent } from './moniter.component';

describe('MoniterComponent', () => {
  let component: MoniterComponent;
  let fixture: ComponentFixture<MoniterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoniterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoniterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
