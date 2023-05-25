import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormatPrinterPage } from './format-printer.page';

describe('FormatPrinterPage', () => {
  let component: FormatPrinterPage;
  let fixture: ComponentFixture<FormatPrinterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormatPrinterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormatPrinterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
