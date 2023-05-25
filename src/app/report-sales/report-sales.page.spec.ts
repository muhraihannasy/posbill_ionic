import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReportSalesPage } from './report-sales.page';

describe('ReportSalesPage', () => {
  let component: ReportSalesPage;
  let fixture: ComponentFixture<ReportSalesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportSalesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReportSalesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
