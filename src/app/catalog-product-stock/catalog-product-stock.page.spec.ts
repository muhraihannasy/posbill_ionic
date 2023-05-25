import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CatalogProductStockPage } from './catalog-product-stock.page';

describe('CatalogProductStockPage', () => {
  let component: CatalogProductStockPage;
  let fixture: ComponentFixture<CatalogProductStockPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogProductStockPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CatalogProductStockPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
