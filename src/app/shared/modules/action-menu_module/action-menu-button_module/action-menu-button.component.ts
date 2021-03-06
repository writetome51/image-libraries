import { ActionMenuComponent } from '../action-menu.component';
import { Component, Input } from '@angular/core';


@Component({
	selector: 'action-menu-button',
	template: `
		<button type="button" class="btn btn-default action-menu-button"
			(click)="toggleOpenMenu($event)"
		>
			<div class="sprocket-wheel-caret-container">
				<sprocket-wheel></sprocket-wheel>
				<span class="caret"></span>
			</div>

		</button>
	`,
	styles: [`.action-menu-button { padding: 0 10px; }`]
})
export class ActionMenuButtonComponent {

	@Input() menu: ActionMenuComponent;
	readonly label = 'Action';


	toggleOpenMenu(event): void {
		event.stopPropagation();
		this.menu.open = !(this.menu.open);
	}

}
