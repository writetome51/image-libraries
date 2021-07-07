import { AppImage } from '@interfaces/app-image.interface';
import { ActionMenuContext } from '@interfaces/action-menu-context.interface';
import { Component, Input, OnInit } from '@angular/core';
import { ImageActionMenuChoicesManagerService } from './image-action-menu-choices-manager.service';
import { ImageActionMenuChoicesExecutorService }
	from './image-action-menu-choices-executor_service/image-action-menu-choices-executor.service';


@Component({
	selector: 'image-action-menu',
	template: `<action-menu [context]="this"></action-menu>`
})
export class ImageActionMenuComponent implements ActionMenuContext, OnInit {

	@Input() image: AppImage;
	getChoicesArgs = [];


	constructor(
		public menuChoicesManager: ImageActionMenuChoicesManagerService,
		public choicesExecutor: ImageActionMenuChoicesExecutorService
	) {}


	ngOnInit() {
		this.getChoicesArgs = [this.image];
	}

}
