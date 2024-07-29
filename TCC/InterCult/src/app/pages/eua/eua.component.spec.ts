import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EuaComponent } from './eua.component';

describe('EuaComponent', () => {
  let component: EuaComponent;
  let fixture: ComponentFixture<EuaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EuaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EuaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
