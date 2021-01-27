import { Component, Input, OnInit } from '@angular/core';
import { MenuChoice } from './menu-choice.interface';
import { MenuChoicesManager } from '@action-menu/menu-choices-manager.interface';
import { MenuChoiceExecutorService } from './menu-choice-executor.service';
import { SpecificChoicesExecutorService } from './specific-choices-executor.service';


@Component({
	selector: 'action-menu',
	templateUrl: './action-menu.component.html',

	// Creates new instance of service for every instance of this component.
	providers: [MenuChoiceExecutorService]
})
export class ActionMenuComponent implements OnInit {

	open = false;
	choices: MenuChoice[] = [];

	@Input() specificChoicesExecutor: SpecificChoicesExecutorService;
	@Input() choicesManager: MenuChoicesManager;
	@Input() choicesManagerArgs? = [];


	constructor(private __menuChoiceExecutor: MenuChoiceExecutorService) {
	}


	ngOnInit() {
		this.choices = this.choicesManager.getChoices(...this.choicesManagerArgs);
		this.__menuChoiceExecutor.set(this.specificChoicesExecutor);
	}


	close(): void {
		this.open = false;
	}

}
