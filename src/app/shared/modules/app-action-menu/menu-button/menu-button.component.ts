import { AppActionMenuComponent } from '@app-action-menu/app-action-menu.component';
import { Component, Input } from '@angular/core';


@Component({
	selector: 'menu-button',
	template: `
		<button class="btn btn-default" type="button" id="menu1" (click)="toggleOpen()"
				[class.image-mode]="imageMode"
		>
			<div>
				<ng-container *ngIf="!(imageMode)">{{label}}</ng-container>

				<sprocket-wheel *ngIf="imageMode"></sprocket-wheel>

				<span class="caret"></span>
			</div>
		</button>
	`,
	styleUrls: ['./menu-button.component.css']
})
export class MenuButtonComponent {

	@Input() imageMode = false;
	@Input() menu: AppActionMenuComponent;
	readonly label = 'Action';


	toggleOpen(): void {
		this.menu.open = !(this.menu.open);
	}

}
