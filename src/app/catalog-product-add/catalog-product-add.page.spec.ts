import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CatalogProductAddPage } from './catalog-product-add.page';

describe('CatalogProductAddPage', () => {
  let component: CatalogProductAddPage;
  let fixture: ComponentFixture<CatalogProductAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogProductAddPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CatalogProductAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
