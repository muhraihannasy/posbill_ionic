import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CatalogProductEditPage } from './catalog-product-edit.page';

describe('CatalogProductEditPage', () => {
  let component: CatalogProductEditPage;
  let fixture: ComponentFixture<CatalogProductEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogProductEditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CatalogProductEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
