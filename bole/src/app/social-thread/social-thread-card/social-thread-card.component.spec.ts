import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialThreadCardComponent } from './social-thread-card.component';

describe('SocialThreadCardComponent', () => {
  let component: SocialThreadCardComponent;
  let fixture: ComponentFixture<SocialThreadCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialThreadCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialThreadCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
