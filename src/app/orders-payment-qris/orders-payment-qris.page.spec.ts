import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OrdersPaymentQrisPage } from './orders-payment-qris.page';

describe('OrdersPaymentQrisPage', () => {
  let component: OrdersPaymentQrisPage;
  let fixture: ComponentFixture<OrdersPaymentQrisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersPaymentQrisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OrdersPaymentQrisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
