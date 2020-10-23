import { ActionMenuChoicesData as actionMenuChoices }
	from '@runtime-state-data/static-classes/auto-resettable.data';
import { AppActionMenuChoice } from '@interfaces/app-action-menu-choice';
import { AppActionMenuChoicesManagerService } from './app-action-menu-choices-manager.service';
import { AppImage } from '@interfaces/app-image';
import { Component, Input, OnInit } from '@angular/core';


@Component({
	selector: 'app-action-menu',
	templateUrl: './app-action-menu.component.html',
	styleUrls: ['./app-action-menu.component.css']
})
export class AppActionMenuComponent implements OnInit {

	@Input() image: AppImage;
	open = false;

	get imageMode(): boolean {
		return (this.image ? true : false);
	}


	get choices(): AppActionMenuChoice[] {
		if (this.imageMode) return actionMenuChoices.images[this.image.name];
		else return actionMenuChoices.global;
	}


	constructor(private __choicesManager: AppActionMenuChoicesManagerService) {
	}


	ngOnInit() {
		if (this.imageMode) this.__choicesManager.manageImage(this.image);
		else this.__choicesManager.manageGlobal();
	}


	close(): void {
		this.open = false;
	}

}
