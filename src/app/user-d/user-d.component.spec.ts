import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDComponent } from './user-d.component';

describe('UserDComponent', () => {
  let component: UserDComponent;
  let fixture: ComponentFixture<UserDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserDComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
