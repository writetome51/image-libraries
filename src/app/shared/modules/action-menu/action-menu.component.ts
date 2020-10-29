import { ActionMenuChoice } from '@interfaces/action-menu-choice';
import { OnInit } from '@angular/core';


export abstract class ActionMenuComponent implements OnInit {

	open = false;
	choices: ActionMenuChoice[] = [];


	constructor(
		protected _choicesManager: {
			getChoices: (...args) => ActionMenuChoice[]
		}
	) {
	}


	ngOnInit() {
		this.choices = this._choicesManager.getChoices();
	}


	close(): void {
		this.open = false;
	}

}
