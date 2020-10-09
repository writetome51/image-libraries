import { ActionMenuChoicesData as actionMenuChoices }
	from '@runtime-state-data/static-classes/auto-resettable.data';
import { AppActionMenuChoice } from '@interfaces/app-action-menu-choice';
import { AppActionMenuChoicesManagerService } from './app-action-menu-choices-manager.service';
import { AppImage } from '@interfaces/app-image';
import { Component, Input, OnInit } from '@angular/core';
import { HoverableComponent } from '@abstract-components/hoverable.component';


@Component({
	selector: 'app-action-menu',
	templateUrl: './app-action-menu.component.html',
	styleUrls: ['./app-action-menu.component.css']
})
export class AppActionMenuComponent extends HoverableComponent implements OnInit {

	@Input() image: AppImage;
	open = false;


	get choices(): AppActionMenuChoice[] {
		if (this.image) return actionMenuChoices.images[this.image.name];
		else return actionMenuChoices.global;
	}


	constructor(private __choicesManager: AppActionMenuChoicesManagerService) {
		super();
	}


	ngOnInit() {
		if (this.image) this.__choicesManager.manageImage(this.image);
		else this.__choicesManager.manageGlobal();
	}


	unHover_and_close(): void {
		this.unHover();
		this.open = false;
	}

}
