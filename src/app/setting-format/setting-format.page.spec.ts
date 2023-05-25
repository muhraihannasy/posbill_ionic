import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SettingFormatPage } from './setting-format.page';

describe('SettingFormatPage', () => {
  let component: SettingFormatPage;
  let fixture: ComponentFixture<SettingFormatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingFormatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SettingFormatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
