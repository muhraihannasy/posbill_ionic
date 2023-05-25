import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DiscountAddPage } from './discount-add.page';

describe('DiscountAddPage', () => {
  let component: DiscountAddPage;
  let fixture: ComponentFixture<DiscountAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscountAddPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DiscountAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
