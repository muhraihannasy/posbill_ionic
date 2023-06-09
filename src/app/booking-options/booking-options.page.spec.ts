import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BookingOptionsPage } from './booking-options.page';

describe('BookingOptionsPage', () => {
  let component: BookingOptionsPage;
  let fixture: ComponentFixture<BookingOptionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingOptionsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BookingOptionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
