import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SettingPaymentPage } from './setting-payment.page';

describe('SettingPaymentPage', () => {
  let component: SettingPaymentPage;
  let fixture: ComponentFixture<SettingPaymentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingPaymentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SettingPaymentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
