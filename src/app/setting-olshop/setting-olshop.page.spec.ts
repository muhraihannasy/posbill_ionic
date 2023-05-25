import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SettingOlshopPage } from './setting-olshop.page';

describe('SettingOlshopPage', () => {
  let component: SettingOlshopPage;
  let fixture: ComponentFixture<SettingOlshopPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingOlshopPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SettingOlshopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
