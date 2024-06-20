import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatePageComponent } from './date-page.component';

describe('DatePageComponent', () => {
  let component: DatePageComponent;
  let fixture: ComponentFixture<DatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
