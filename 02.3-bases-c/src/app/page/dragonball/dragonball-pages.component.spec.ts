import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonballPagesComponent } from './dragonball-pages.component';

describe('DragonballPagesComponent', () => {
  let component: DragonballPagesComponent;
  let fixture: ComponentFixture<DragonballPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DragonballPagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DragonballPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
