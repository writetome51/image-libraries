import { Component, Input, OnInit } from '@angular/core';
import { DirectProcessor } from '@interfaces/direct-processor';
import { MenuChoice } from '@interfaces/menu-choice';
import { MenuChoicesManager } from '@interfaces/menu-choices-manager';


@Component({
	selector: 'action-menu',
	templateUrl: './action-menu.component.html'
})
export class ActionMenuComponent implements OnInit {

	open = false;
	choices: MenuChoice[] = [];

	@Input() choicesProcessor: DirectProcessor;
	@Input() choicesManager: MenuChoicesManager;
	@Input() choicesManagerArgs? = [];



	ngOnInit() {
		this.choices = this.choicesManager.getChoices(...this.choicesManagerArgs);
	}


	close(): void {
		this.open = false;
	}

}
