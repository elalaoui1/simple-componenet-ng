import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleHomeComponent } from './simple-home.component';

describe('SimpleHomeComponent', () => {
  let component: SimpleHomeComponent;
  let fixture: ComponentFixture<SimpleHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
