import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InactivePage } from './inactive.page';

describe('InactivePage', () => {
  let component: InactivePage;
  let fixture: ComponentFixture<InactivePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InactivePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InactivePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
