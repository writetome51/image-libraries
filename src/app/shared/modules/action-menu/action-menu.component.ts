import { ActionMenuChoice } from '@interfaces/action-menu-choice';
import { Component, Input, OnInit } from '@angular/core';
import { AppImage } from '@interfaces/app-image';


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

	@Input() choicesManager: { getChoices: (...args) => ActionMenuChoice[] };
	@Input() argsForChoicesManager? = [];

	@Input() image?: AppImage; // If in image mode.


	ngOnInit() {
		this.choices = this.choicesManager.getChoices(...this.argsForChoicesManager);
	}


	close(): void {
		this.open = false;
	}

}
