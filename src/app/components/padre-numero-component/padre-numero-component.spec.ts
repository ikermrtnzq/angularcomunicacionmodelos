import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PadreNumeroComponent } from './padre-numero-component';

describe('PadreNumeroComponent', () => {
  let component: PadreNumeroComponent;
  let fixture: ComponentFixture<PadreNumeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PadreNumeroComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PadreNumeroComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
