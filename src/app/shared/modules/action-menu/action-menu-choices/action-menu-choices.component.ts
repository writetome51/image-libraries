import { ActionMenuChoice } from '@interfaces/action-menu-choice';
import { Component, Input } from '@angular/core';


@Component({
	selector: 'action-menu-choices',
	template: `
		<ul class="dropdown-menu action-menu" [class.image-mode]="!!(image)">

			<menu-choice *ngFor="let choice of data"  [data]="{choice: choice, image: image}">
			</menu-choice>

		</ul>
	`,
	styleUrls: ['./action-menu-choices.component.css']
})
export class ActionMenuChoicesComponent {

	@Input() data: ActionMenuChoice[];
	@Input() image?: any;

}
