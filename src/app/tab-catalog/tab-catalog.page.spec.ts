import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { TabCatalogPage } from './tab-catalog.page';

describe('TabCatalogPage', () => {
  let component: TabCatalogPage;
  let fixture: ComponentFixture<TabCatalogPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabCatalogPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(TabCatalogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
