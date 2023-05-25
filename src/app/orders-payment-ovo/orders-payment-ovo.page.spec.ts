import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OrdersPaymentOvoPage } from './orders-payment-ovo.page';

describe('OrdersPaymentOvoPage', () => {
  let component: OrdersPaymentOvoPage;
  let fixture: ComponentFixture<OrdersPaymentOvoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersPaymentOvoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OrdersPaymentOvoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
