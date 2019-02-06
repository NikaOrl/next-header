import {NgModule} from '@angular/core';
import {NextHeaderComponent} from './next-header.component';
import {CommonModule} from '@angular/common';
import {SvgIconModule} from '../svg-icon/svg-icon.module';
import {UserNameModule} from '../users/components/user-name/user-name.module';

@NgModule({
  imports: [
    CommonModule,
    UserNameModule,
    SvgIconModule,
  ],
  exports: [NextHeaderComponent],
  declarations: [NextHeaderComponent],
})
export class NextHeaderModule {
}
