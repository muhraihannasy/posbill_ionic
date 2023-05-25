import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CatalogCategoryEditPage } from './catalog-category-edit.page';

describe('CatalogCategoryEditPage', () => {
  let component: CatalogCategoryEditPage;
  let fixture: ComponentFixture<CatalogCategoryEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogCategoryEditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CatalogCategoryEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
