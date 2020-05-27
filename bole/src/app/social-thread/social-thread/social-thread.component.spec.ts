import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialThreadComponent } from './social-thread.component';

describe('SocialThreadComponent', () => {
  let component: SocialThreadComponent;
  let fixture: ComponentFixture<SocialThreadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialThreadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialThreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
