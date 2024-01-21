import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordingsAddComponent } from './recordings-add.component';

describe('RecordingsComponent', () => {
  let component: RecordingsAddComponent;
  let fixture: ComponentFixture<RecordingsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordingsAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordingsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
