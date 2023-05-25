import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SettingOrderTypePage } from './setting-order-type.page';

describe('SettingOrderTypePage', () => {
  let component: SettingOrderTypePage;
  let fixture: ComponentFixture<SettingOrderTypePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingOrderTypePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SettingOrderTypePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
