import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiTap2ContentComponent } from './bai-tap2-content.component';

describe('BaiTap2ContentComponent', () => {
  let component: BaiTap2ContentComponent;
  let fixture: ComponentFixture<BaiTap2ContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaiTap2ContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaiTap2ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
