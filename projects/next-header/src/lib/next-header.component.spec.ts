import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextHeaderComponent } from './next-header.component';

import { By } from '@angular/platform-browser';

import { Component } from '@angular/core';

@Component({
  template: `
    <next-header [projectName]="projectName">
      <div help-slot></div>
      <div user-name-slot></div>
      <div logout-slot></div>
    </next-header>
  `
})
class HostComponent {
  public projectName = 'projectName_test';
}

describe('NextHeaderComponent', () => {
  let component: NextHeaderComponent;
  let fixture: ComponentFixture<NextHeaderComponent>;
  let hostFixture: ComponentFixture<HostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NextHeaderComponent, HostComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    hostFixture = TestBed.createComponent(HostComponent);
    fixture = TestBed.createComponent(NextHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show env', () => {
    component.env = 'test_env';
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const de = fixture.debugElement.query(By.css('.next-header__env'));
      expect(de.nativeElement.textContent).toContain('test_env');
    });
  });

  it('should show projectName', () => {
    component.projectName = 'test_projectName';
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const de = fixture.debugElement.query(
        By.css('.next-header__project-name')
      );
      expect(de.nativeElement.textContent).toContain('test_projectName');
    });
  });

  it('should show description', () => {
    component.projectName = 'test_description';
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const de = fixture.debugElement.query(
        By.css('.next-header__description')
      );
      expect(de.nativeElement.textContent).toContain('test_description');
    });
  });

  it('should emit when the projectName is clicked', () => {
    spyOn(component.projectNameClickEmitter, 'emit');
    fixture.whenStable().then(() => {
      const a = fixture.debugElement.nativeElement.query(
        By.css('.next-header__project-name')
      );
      a.click();
      expect(component.projectNameClickEmitter.emit).toHaveBeenCalled();
    });
  });

  it(`should transclude the help-slot content`, () => {
    hostFixture.detectChanges();
    hostFixture.whenStable().then(() => {
      const de = hostFixture.debugElement.query(
        By.css('.next-header__user-section')
      );
      expect(de.nativeElement.innerHTML).toContain('help-slot');
    });
  });

  it(`should transclude the user-name-slot content`, () => {
    hostFixture.detectChanges();
    hostFixture.whenStable().then(() => {
      const de = hostFixture.debugElement.query(
        By.css('.next-header__user-section')
      );
      expect(de.nativeElement.innerHTML).toContain('user-name-slot');
    });
  });

  it(`should transclude the logout-slot content`, () => {
    hostFixture.detectChanges();
    hostFixture.whenStable().then(() => {
      const de = hostFixture.debugElement.query(
        By.css('.next-header__user-section')
      );
      expect(de.nativeElement.innerHTML).toContain('logout-slot');
    });
  });
});
