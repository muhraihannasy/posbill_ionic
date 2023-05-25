import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { TabPosPage } from './tab-pos.page';

describe('TabPosPage', () => {
  let component: TabPosPage;
  let fixture: ComponentFixture<TabPosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabPosPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(TabPosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
