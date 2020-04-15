import { Component, Input } from '@angular/core';

@Component({
  selector: 'menu',
  templateUrl: './menu.control.html',
  styleUrls: ['./menu.control.css']
})
export class MenuControl {
  @Input() showHome: boolean = true;
}
