import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Conseils } from './conseils';

describe('Conseils', () => {
  let component: Conseils;
  let fixture: ComponentFixture<Conseils>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Conseils],
    }).compileComponents();

    fixture = TestBed.createComponent(Conseils);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
