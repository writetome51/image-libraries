import { Component, Input } from '@angular/core';
import { ActionMenuComponent } from '@abstract-components/action-menu.component';


@Component({
	selector: 'action-menu-button',
	template: `
		<button type="button" class="btn btn-default" [class.image-mode]="imageMode"
			(click)="toggleOpenMenu()"
		>
			<div>
				<ng-container *ngIf="!(imageMode)">{{label}}</ng-container>

				<sprocket-wheel *ngIf="imageMode"></sprocket-wheel>

				<span class="caret"></span>
			</div>
		</button>
	`,
	styleUrls: ['./action-menu-button.component.css']
})
export class ActionMenuButtonComponent {

	@Input() imageMode = false;
	@Input() menu: ActionMenuComponent;
	readonly label = 'Action';


	toggleOpenMenu(): void {
		this.menu.open = !(this.menu.open);
	}

}
