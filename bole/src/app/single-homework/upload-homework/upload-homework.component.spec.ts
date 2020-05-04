import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadHomeworkComponent } from './upload-homework.component';

describe('UploadHomeworkComponent', () => {
  let component: UploadHomeworkComponent;
  let fixture: ComponentFixture<UploadHomeworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadHomeworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadHomeworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
