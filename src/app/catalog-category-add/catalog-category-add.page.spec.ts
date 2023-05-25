import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CatalogCategoryAddPage } from './catalog-category-add.page';

describe('CatalogCategoryAddPage', () => {
  let component: CatalogCategoryAddPage;
  let fixture: ComponentFixture<CatalogCategoryAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogCategoryAddPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CatalogCategoryAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
