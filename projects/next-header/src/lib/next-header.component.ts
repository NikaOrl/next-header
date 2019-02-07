import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'next-header',
  templateUrl: './next-header.component.html',
  styleUrls: ['./next-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class NextHeaderComponent {
  @Input() env: string;
  @Input() projectName: string;
  @Input() description: string;
  @Output() projectNameClickEmitter = new EventEmitter();

  projectNameClick() {
    this.projectNameClickEmitter.emit();
  }
}
