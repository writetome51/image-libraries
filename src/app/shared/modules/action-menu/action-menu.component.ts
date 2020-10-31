import { ActionMenuChoice } from '@interfaces/action-menu-choice';
import { AppImage } from '@interfaces/app-image';
import { ActionMenuChoicesManager } from '@interfaces/action-menu-choices-manager';
import { Component, Input, OnInit } from '@angular/core';


@Component({
	selector: 'action-menu',
	templateUrl: './action-menu.component.html',
	styleUrls: ['./action-menu.component.css']
})

// This has the option of being used in 'image mode', which is when the menu is being used on a
// single image. To use image mode, you assign an AppImage to input property `image`.

export class ActionMenuComponent implements OnInit {

	open = false;
	choices: ActionMenuChoice[] = [];

	@Input() choicesManager: ActionMenuChoicesManager;
	@Input() argsForChoicesManager? = [];

	@Input() image?: AppImage; // If in image mode.


	ngOnInit() {
		this.choices = this.choicesManager.getChoices(...this.argsForChoicesManager);
	}


	close(): void {
		this.open = false;
	}

}
