import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SettingSalePage } from './setting-sale.page';

describe('SettingSalePage', () => {
  let component: SettingSalePage;
  let fixture: ComponentFixture<SettingSalePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingSalePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SettingSalePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
