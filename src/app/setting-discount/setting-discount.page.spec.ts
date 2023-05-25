import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SettingDiscountPage } from './setting-discount.page';

describe('SettingDiscountPage', () => {
  let component: SettingDiscountPage;
  let fixture: ComponentFixture<SettingDiscountPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingDiscountPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SettingDiscountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
