import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OutletEditPage } from './outlet-edit.page';

describe('OutletEditPage', () => {
  let component: OutletEditPage;
  let fixture: ComponentFixture<OutletEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutletEditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OutletEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
