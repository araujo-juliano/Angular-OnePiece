import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogJinbeComponent } from './dialog-jinbe.component';

describe('DialogJinbeComponent', () => {
  let component: DialogJinbeComponent;
  let fixture: ComponentFixture<DialogJinbeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogJinbeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogJinbeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
