import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDComponent } from './admin-d.component';

describe('AdminDComponent', () => {
  let component: AdminDComponent;
  let fixture: ComponentFixture<AdminDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminDComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
