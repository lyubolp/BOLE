import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialThreadMessagesComponent } from './social-thread-messages.component';

describe('SocialThreadMessageComponent', () => {
  let component: SocialThreadMessagesComponent;
  let fixture: ComponentFixture<SocialThreadMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialThreadMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialThreadMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
