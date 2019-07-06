import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiTap2SidebarComponent } from './bai-tap2-sidebar.component';

describe('BaiTap2SidebarComponent', () => {
  let component: BaiTap2SidebarComponent;
  let fixture: ComponentFixture<BaiTap2SidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaiTap2SidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaiTap2SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
