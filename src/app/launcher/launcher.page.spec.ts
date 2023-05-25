import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LauncherPage } from './launcher.page';

describe('LauncherPage', () => {
  let component: LauncherPage;
  let fixture: ComponentFixture<LauncherPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LauncherPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LauncherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
