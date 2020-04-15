import { Component, Input } from '@angular/core';

@Component({
  selector: 'menu-item',
  templateUrl: './menu.item.html',
  styleUrls: ['./menu.item.css', '../shared/card.css']
})
export class MenuItem {
  @Input() text: string;
  @Input() icon: string;
  @Input() routerLink: string[]
}
