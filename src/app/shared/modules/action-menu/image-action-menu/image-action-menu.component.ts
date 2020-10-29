import { ActionMenuComponent } from '@app/shared/modules/action-menu/action-menu.component';
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


	constructor(_choicesManager: ImageActionMenuChoicesManagerService) {
		super(_choicesManager);
	}


	ngOnInit() {
		this.choices = this._choicesManager.getChoices(this.image);
	}

}
