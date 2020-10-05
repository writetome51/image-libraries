import { Component, Input } from '@angular/core';


@Component({
	selector: 'menu-button',
	templateUrl: './menu-button.component.html',
	styleUrls: ['./menu-button.component.css']
})
export class MenuButtonComponent {

	@Input() image: any
	readonly label = 'Action';
	open = false;


	toggleOpen(): void {
		this.open = !(this.open);
	}

}
