import { AppImage } from '@interfaces/app-image/app-image.interface';
import { Component, Input } from '@angular/core';
import { ImageActionMenuChoicesManagerService } from './image-action-menu-choices-manager.service';
import { ImageActionMenuChoicesExecutorService }
	from './image-action-menu-choices-executor.service';


@Component({
	selector: 'image-action-menu',
	template: `
		<action-menu [getChoices]="choicesManager"
					 [choicesManagerArgs]="[image]"
					 [specificChoicesExecutor]="specificChoicesExecutor"
		>
		</action-menu>
	`
})
export class ImageActionMenuComponent {

	@Input() image: AppImage;


	constructor(
		public choicesManager: ImageActionMenuChoicesManagerService,
		public specificChoicesExecutor: ImageActionMenuChoicesExecutorService
	) {
	}

}
