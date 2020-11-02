import { AppImage } from '@interfaces/app-image';
import { Component, Input } from '@angular/core';
import { ImageActionMenuChoicesManagerService } from './image-action-menu-choices-manager.service';
import { ChoiceProcessorsService } from './choice-processors.service';


@Component({
	selector: 'image-action-menu',
	template: `
		<action-menu [choicesManager]="choicesManager" [choicesManagerArgs]="[image]"
					 [choicesProcessor]="choicesProcessor"
		>
		</action-menu>
	`
})
export class ImageActionMenuComponent {

	@Input() image: AppImage;


	constructor(
		public choicesManager: ImageActionMenuChoicesManagerService,
		public choicesProcessor: ChoiceProcessorsService
	) {
	}

}
