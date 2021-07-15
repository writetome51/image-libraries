import { Component, Input, OnInit } from '@angular/core';
import { ImageActionMenuChoicesManagerService } from './image-action-menu-choices-manager.service';
import { ImageActionMenuChoicesExecutorService }
	from './image-action-menu-choices-executor_service/image-action-menu-choices-executor.service';
import { ImageRecord } from '@interfaces/image-record.interface';
import { ActionMenuContextDirective }
	from '@abstract-directives/action-menu-context.abstract.directive';


@Component({
	selector: 'image-action-menu',
	template: `<action-menu [context]="this"></action-menu>`
})
export class ImageActionMenuComponent extends ActionMenuContextDirective implements OnInit {

	@Input() image: ImageRecord;


	constructor(
		menuChoicesManager: ImageActionMenuChoicesManagerService,
		choicesExecutor: ImageActionMenuChoicesExecutorService
	) {
		super(menuChoicesManager, choicesExecutor);
	}


	ngOnInit() {
		this.getChoicesArgs = [this.image];
	}

}
