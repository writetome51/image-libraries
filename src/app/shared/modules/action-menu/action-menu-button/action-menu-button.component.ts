import { Component, Input } from '@angular/core';
import { ActionMenuComponent } from '@app/shared/modules/action-menu/action-menu.component';


@Component({
	selector: 'action-menu-button',
	template: `
		<button type="button" class="btn btn-default" (click)="toggleOpenMenu()">
			<div>
				<sprocket-wheel></sprocket-wheel>
				<span class="caret"></span>
			</div>
		</button>
	`
})
export class ActionMenuButtonComponent {

	@Input() menu: ActionMenuComponent;
	readonly label = 'Action';


	toggleOpenMenu(): void {
		this.menu.open = !(this.menu.open);
	}

}
