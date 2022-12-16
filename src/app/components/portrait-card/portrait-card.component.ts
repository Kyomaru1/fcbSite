import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-portrait-card',
  templateUrl: './portrait-card.component.html',
  styleUrls: ['./portrait-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class PortraitCardComponent {
  @Input('member') member : any;
  
}
