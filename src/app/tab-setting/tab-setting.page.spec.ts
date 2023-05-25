import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { TabSettingPage } from './tab-setting.page';

describe('TabSettingPage', () => {
  let component: TabSettingPage;
  let fixture: ComponentFixture<TabSettingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabSettingPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(TabSettingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
