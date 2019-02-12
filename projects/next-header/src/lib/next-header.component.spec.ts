import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextHeaderComponent } from './next-header.component';

import { By } from '@angular/platform-browser';

import { Component } from '@angular/core';

@Component({
  template: `
    <next-header
      [env]="env"
      [projectName]="projectName"
      [description]="description"
    >
      <div help-slot>
        <div class="help-slot-test-element"></div>
      </div>
      <div user-name-slot>
        <div class="user-name-slot-test-element"></div>
      </div>
      <div logout-slot>
        <div class="logout-slot-test-element"></div>
      </div>
    </next-header>
  `
})
class HostComponent {
  env = 'test_env';
  projectName = 'test_projectName';
  description = 'test_description';
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
    hostFixture.detectChanges();
    hostFixture.whenStable().then(() => {
      const de = hostFixture.debugElement.query(
        By.css('.next-header__env')
      );
      expect(de.nativeElement.textContent).toContain('test_env');
    });
  });

  it('should show projectName', () => {
    hostFixture.detectChanges();
    hostFixture.whenStable().then(() => {
      const de = hostFixture.debugElement.query(
        By.css('.next-header__project-name')
      );
      expect(de.nativeElement.textContent).toContain('test_projectName');
    });
  });

  it('should show description', () => {
    hostFixture.detectChanges();
    hostFixture.whenStable().then(() => {
      const de = hostFixture.debugElement.query(
        By.css('.next-header__description')
      );
      expect(de.nativeElement.textContent).toContain('test_description');
    });
  });

  it('should emit when the projectName is clicked', () => {
    spyOn(component.projectNameClickEmitter, 'emit');
    fixture.whenStable().then(() => {
      const de = fixture.debugElement.query(
        By.css('.next-header__project-name')
      );
      de.nativeElement.click();
      expect(component.projectNameClickEmitter.emit).toHaveBeenCalled();
    });
  });

  it(`should transclude the help-slot content`, () => {
    hostFixture.detectChanges();
    hostFixture.whenStable().then(() => {
      const de = hostFixture.debugElement.query(
        By.css('.next-header__user-section')
      );
      expect(de.nativeElement.innerHTML).toContain('help-slot-test-element');
    });
  });

  it(`should transclude the user-name-slot content`, () => {
    hostFixture.detectChanges();
    hostFixture.whenStable().then(() => {
      const de = hostFixture.debugElement.query(
        By.css('.next-header__user-section')
      );
      expect(de.nativeElement.innerHTML).toContain('user-name-slot-test-element');
    });
  });

  it(`should transclude the logout-slot content`, () => {
    hostFixture.detectChanges();
    hostFixture.whenStable().then(() => {
      const de = hostFixture.debugElement.query(
        By.css('.next-header__user-section')
      );
      expect(de.nativeElement.innerHTML).toContain('logout-slot-test-element');
    });
  });
});
