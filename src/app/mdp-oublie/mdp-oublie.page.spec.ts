import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MdpOubliePage } from './mdp-oublie.page';

describe('MdpOubliePage', () => {
  let component: MdpOubliePage;
  let fixture: ComponentFixture<MdpOubliePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MdpOubliePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
