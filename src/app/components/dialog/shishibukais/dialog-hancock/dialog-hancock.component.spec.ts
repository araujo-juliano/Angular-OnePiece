import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogHancockComponent } from './dialog-hancock.component';

describe('DialogHancockComponent', () => {
  let component: DialogHancockComponent;
  let fixture: ComponentFixture<DialogHancockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogHancockComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogHancockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
