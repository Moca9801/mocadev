import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSmallDevicesComponent } from './main-small-devices.component';

describe('MainSmallDevicesComponent', () => {
  let component: MainSmallDevicesComponent;
  let fixture: ComponentFixture<MainSmallDevicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainSmallDevicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainSmallDevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
