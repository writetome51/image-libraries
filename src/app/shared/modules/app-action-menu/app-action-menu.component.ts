import { ActionMenuChoicesData as actionMenuChoices }
	from '@runtime-state-data/static-classes/auto-resettable.data';
import { AppActionMenuChoice } from '@interfaces/app-action-menu-choice';
import { AppActionMenuChoicesManagerService } from './app-action-menu-choices-manager.service';
import { AppImage } from '@interfaces/app-image';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MenuButtonComponent } from '@app-action-menu/menu-button/menu-button.component';


@Component({
	selector: 'app-action-menu',
	templateUrl: './app-action-menu.component.html',
	styleUrls: ['./app-action-menu.component.css']
})
export class AppActionMenuComponent implements OnInit {

	@Input() image: AppImage;
	@ViewChild(MenuButtonComponent) menuButton: MenuButtonComponent;
	hovered = false;


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


	hover(): void {
		this.hovered = true;
	}


	unHover_and_close(): void {
		this.hovered = false;
		this.menuButton.open = false;
	}

}
