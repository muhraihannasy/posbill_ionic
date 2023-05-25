import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CatalogProductPage } from './catalog-product.page';

describe('CatalogProductPage', () => {
  let component: CatalogProductPage;
  let fixture: ComponentFixture<CatalogProductPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogProductPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CatalogProductPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
