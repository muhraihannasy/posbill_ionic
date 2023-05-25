import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OnlineShopPage } from './online-shop.page';

describe('OnlineShopPage', () => {
  let component: OnlineShopPage;
  let fixture: ComponentFixture<OnlineShopPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineShopPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OnlineShopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
