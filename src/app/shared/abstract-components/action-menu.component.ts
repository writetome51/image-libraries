import { ActionMenuChoice } from '@interfaces/action-menu-choice';
import { OnInit } from '@angular/core';


export abstract class ActionMenuComponent implements OnInit {

	open = false;
	abstract choices: ActionMenuChoice[];


	constructor(
		protected _choicesManager: { manage: (...args) => void }
	) {
	}


	ngOnInit() {
		this._choicesManager.manage();
	}


	close(): void {
		this.open = false;
	}

}
