import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradesSectionComponent } from './grades-section.component';

describe('GradesSectionComponent', () => {
  let component: GradesSectionComponent;
  let fixture: ComponentFixture<GradesSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradesSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
