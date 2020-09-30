import { ActionMenuChoicesData as actionMenuChoices }
	from '@runtime-state-data/static-classes/auto-resettable.data';
import { AppActionMenuChoice } from '@interfaces/app-action-menu-choice';
import { AppActionMenuChoicesManagerService } from './app-action-menu-choices-manager.service';
import { AppImage } from '@interfaces/app-image';
import { Component, Input, OnInit } from '@angular/core';
import { environment } from '@environments/environment';


@Component({
	selector: 'app-action-menu',
	templateUrl: './app-action-menu.component.html',
	styleUrls: ['./app-action-menu.component.css']
})
export class AppActionMenuComponent implements OnInit {

	@Input() image: AppImage;
	readonly sprocket = {
		src: environment.assets + 'sprocket-wheel.png',
		width: 11,
		height: 11,
		alt: 'action menu'
	};
	readonly label = 'Action';
	hovered = false;
	open = false;


	get choices(): AppActionMenuChoice[] {
		if (this.image) return actionMenuChoices.images[this.image.name];
		else return actionMenuChoices.global;
	}


	constructor(private __choicesManager: AppActionMenuChoicesManagerService) {
	}


	ngOnInit() {
		if (this.image) this.__choicesManager.manageImage(this.image);
		else this.__choicesManager.manageGlobal();
	}


	toggleOpen(): void {
		this.open = !(this.open);
	}


	hover(): void {
		this.hovered = true;
	}


	unHover(): void {
		this.hovered = false;
		this.open = false;
	}

}
