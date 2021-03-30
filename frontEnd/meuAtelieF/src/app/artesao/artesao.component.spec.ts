import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtesaoComponent } from './artesao.component';

describe('ArtesaoComponent', () => {
  let component: ArtesaoComponent;
  let fixture: ComponentFixture<ArtesaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtesaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtesaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
