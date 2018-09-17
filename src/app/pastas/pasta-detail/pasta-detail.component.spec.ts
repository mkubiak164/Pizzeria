import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastaDetailComponent } from './pasta-detail.component';

describe('PastaDetailComponent', () => {
  let component: PastaDetailComponent;
  let fixture: ComponentFixture<PastaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
