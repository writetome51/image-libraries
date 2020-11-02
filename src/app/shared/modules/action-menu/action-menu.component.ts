import { MenuChoicesManager } from '@interfaces/menu-choices-manager';
import { Component, Input, OnInit } from '@angular/core';
import { DirectProcessor } from '@interfaces/direct-processor';
import { MenuChoice } from '@interfaces/menu-choice';


@Component({
	selector: 'action-menu',
	templateUrl: './action-menu.component.html',
	styleUrls: ['./action-menu.component.css']
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
