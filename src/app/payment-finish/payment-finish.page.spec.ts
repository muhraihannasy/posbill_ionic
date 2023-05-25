import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PaymentFinishPage } from './payment-finish.page';

describe('PaymentFinishPage', () => {
  let component: PaymentFinishPage;
  let fixture: ComponentFixture<PaymentFinishPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentFinishPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PaymentFinishPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
