import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InformationDetailPage } from './information-detail.page';

describe('InformationDetailPage', () => {
  let component: InformationDetailPage;
  let fixture: ComponentFixture<InformationDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformationDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InformationDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
