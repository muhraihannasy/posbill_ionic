import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DiscountEditPage } from './discount-edit.page';

describe('DiscountEditPage', () => {
  let component: DiscountEditPage;
  let fixture: ComponentFixture<DiscountEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscountEditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DiscountEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
