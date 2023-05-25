import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReportProductSalesPage } from './report-product-sales.page';

describe('ReportProductSalesPage', () => {
  let component: ReportProductSalesPage;
  let fixture: ComponentFixture<ReportProductSalesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportProductSalesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReportProductSalesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
