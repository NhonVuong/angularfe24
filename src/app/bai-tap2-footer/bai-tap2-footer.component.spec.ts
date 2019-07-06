import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiTap2FooterComponent } from './bai-tap2-footer.component';

describe('BaiTap2FooterComponent', () => {
  let component: BaiTap2FooterComponent;
  let fixture: ComponentFixture<BaiTap2FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaiTap2FooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaiTap2FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
