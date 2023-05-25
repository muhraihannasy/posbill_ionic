import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelectDiscountPage } from './select-discount.page';

describe('SelectDiscountPage', () => {
  let component: SelectDiscountPage;
  let fixture: ComponentFixture<SelectDiscountPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectDiscountPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelectDiscountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
