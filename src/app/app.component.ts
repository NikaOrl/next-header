import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  env = 'Predev';
  projectName = 'NEXT - Admin';
  description = 'External Science';

  onProjectNameClick() {
    console.log(1);
  }
}
