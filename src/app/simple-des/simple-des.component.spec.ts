import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleDesComponent } from './simple-des.component';

describe('SimpleDesComponent', () => {
  let component: SimpleDesComponent;
  let fixture: ComponentFixture<SimpleDesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleDesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleDesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
