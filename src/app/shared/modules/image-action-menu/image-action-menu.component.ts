import { AppImage } from '@interfaces/app-image';
import { Component, Input } from '@angular/core';
import { ImageActionMenuChoicesManagerService } from './image-action-menu-choices-manager.service';


@Component({
	selector: 'image-action-menu',
	template: `
		<action-menu
			[image]="image" [choicesManager]="choicesManager" [argsForChoicesManager]="[image]"
		>
		</action-menu>
	`
})
export class ImageActionMenuComponent {

	@Input() image: AppImage;


	constructor(public choicesManager: ImageActionMenuChoicesManagerService) {
	}

}
