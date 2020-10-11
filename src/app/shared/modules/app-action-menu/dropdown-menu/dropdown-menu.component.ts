import { AppActionMenuChoice } from '@interfaces/app-action-menu-choice';
import { Component, Input } from '@angular/core';


@Component({
	selector: 'dropdown-menu',
	template: `
		<ul class="dropdown-menu action-menu" [class.action-menu-open]="open"
			[class.image-mode]="image"
		>
			<menu-choice *ngFor="let choice of choices"
						 [data]="{choice: choice, image: image, parent: undefined}"
			>
			</menu-choice>
		</ul>
	`,
	styleUrls: ['./dropdown-menu.component.css']
})
export class DropdownMenuComponent {

	@Input() choices: AppActionMenuChoice[];
	@Input() open = false;
	@Input() image: any;

}
