import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OrdersEditPage } from './orders-edit.page';

describe('OrdersEditPage', () => {
  let component: OrdersEditPage;
  let fixture: ComponentFixture<OrdersEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersEditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OrdersEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
