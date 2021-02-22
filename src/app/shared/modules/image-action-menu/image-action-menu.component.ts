import { AppImage } from '@interfaces/app-image/app-image.interface';
import { Component, Input } from '@angular/core';
import { GetImageActionMenuChoicesService }
	from './get-image-action-menu-choices.service';
import { ImageActionMenuChoicesExecutorService }
	from './image-action-menu-choices-executor/image-action-menu-choices-executor.service';


@Component({
	selector: 'image-action-menu',
	template: `
		<action-menu [getChoices]="getChoices"
					 [getChoicesArgs]="[image]"
					 [specificChoicesExecutor]="specificChoicesExecutor"
		>
		</action-menu>
	`
})
export class ImageActionMenuComponent {

	@Input() image: AppImage;


	constructor(
		public getChoices: GetImageActionMenuChoicesService,
		public specificChoicesExecutor: ImageActionMenuChoicesExecutorService
	) {
	}

}
