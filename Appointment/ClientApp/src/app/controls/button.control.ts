import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'button-control',
  templateUrl: './button.control.html',
  styleUrls: ['../shared/card.css', './button.control.css']
})
export class ButtonControl {
  @Input() text: string;
  @Input() icon: string;
  @Input() color: string;
}
