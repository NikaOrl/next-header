import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.scss',
    '../../node_modules/font-awesome/css/font-awesome.css'
  ]
})
export class AppComponent {
  env = 'Predev';
  projectName = 'NEXT - Admin';
  description = 'External Science';

  onProjectNameClick() {
    console.log('Some actions on project name click');
  }

  onMenuClick() {
    console.log('Some actions on the menu button click');
  }

  onBellClick() {
    console.log('Some actions on the bell button click');
  }

  onQuestionClick() {
    console.log('Some actions on the question button click');
  }

  onLogoutClick() {
    console.log('Some actions on the logout button click');
  }
}
