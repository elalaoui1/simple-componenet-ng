import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleTitleComponent } from './simple-title.component';

describe('SimpleTitleComponent', () => {
  let component: SimpleTitleComponent;
  let fixture: ComponentFixture<SimpleTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleTitleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
