import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OrdersPaymentPage } from './orders-payment.page';

describe('OrdersPaymentPage', () => {
  let component: OrdersPaymentPage;
  let fixture: ComponentFixture<OrdersPaymentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersPaymentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OrdersPaymentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
