import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleHomeworkComponent } from './single-homework.component';

describe('SingleHomeworkComponent', () => {
  let component: SingleHomeworkComponent;
  let fixture: ComponentFixture<SingleHomeworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleHomeworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleHomeworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
