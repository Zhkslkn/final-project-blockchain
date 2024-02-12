import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RootMainComponent } from './root-main.component';

describe('RootMainComponent', () => {
  let component: RootMainComponent;
  let fixture: ComponentFixture<RootMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RootMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RootMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
