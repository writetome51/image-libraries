import { ActionMenuChoicesData as actionMenuChoices }
	from '@runtime-state-data/static-classes/auto-resettable.data';
import { ActionMenuComponent } from '@abstract-components/action-menu.component';
import { AppImage } from '@interfaces/app-image';
import { Component, Input, OnInit } from '@angular/core';
import { ImageActionMenuChoicesManagerService } from './image-action-menu-choices-manager.service';


@Component({
	selector: 'image-action-menu',
	templateUrl: './image-action-menu.component.html',
	styleUrls: ['./image-action-menu.component.css']
})
export class ImageActionMenuComponent extends ActionMenuComponent implements OnInit {

	@Input() image: AppImage;
	choices = [];


	constructor(_choicesManager: ImageActionMenuChoicesManagerService) {
		super(_choicesManager);
	}


	ngOnInit(): void {
		this.choices = actionMenuChoices.images[this.image.name];
		this._choicesManager.manage(this.image);
	}

}
