import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HelpChatPage } from './help-chat.page';

describe('HelpChatPage', () => {
  let component: HelpChatPage;
  let fixture: ComponentFixture<HelpChatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpChatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HelpChatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
