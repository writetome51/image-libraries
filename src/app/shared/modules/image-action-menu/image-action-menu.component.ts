import { Component, Input, OnInit } from '@angular/core';
import { AppImage } from '@interfaces/app-image';
import { ImageActionMenuChoicesManagerService }
	from '@image-action-menu/image-action-menu-choices-manager.service';
import { ActionMenuChoice } from '@interfaces/action-menu-choice';
import { ActionMenuChoicesData as actionMenuChoices }
	from '@runtime-state-data/static-classes/auto-resettable.data';


@Component({
	selector: 'image-action-menu',
	templateUrl: './image-action-menu.component.html',
	styleUrls: ['./image-action-menu.component.css']
})
export class ImageActionMenuComponent implements OnInit {

	@Input() image: AppImage;
	open = false;


	get choices(): ActionMenuChoice[] {
		return actionMenuChoices.images[this.image.name];
	}


	constructor(private __choicesManager: ImageActionMenuChoicesManagerService) {
	}


	ngOnInit(): void {
		this.__choicesManager.manage(this.image);
	}


	close(): void {
		this.open = false;
	}

}
