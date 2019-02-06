import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'next-header',
  templateUrl: './next-header.component.html',
  styleUrls: ['./next-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NextHeaderComponent {
  @Input() role: string;
  @Input() showLogout: boolean;
  @Input() env: string;
  @Input() userName: string;
  @Output() logout = new EventEmitter<void>();
}
