import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SettingPrinterPage } from './setting-printer.page';

describe('SettingPrinterPage', () => {
  let component: SettingPrinterPage;
  let fixture: ComponentFixture<SettingPrinterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingPrinterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SettingPrinterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
