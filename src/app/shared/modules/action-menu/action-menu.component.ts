import { Component, Input, OnInit } from '@angular/core';
import { MenuChoice } from './menu-choice.interface';
import { GetChoicesService } from '@action-menu/get-choices-service.interface';
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
	@Input() getChoices: GetChoicesService;
	@Input() choicesManagerArgs? = [];


	constructor(private __menuChoiceExecutor: MenuChoiceExecutorService) {
	}


	ngOnInit() {
		this.choices = this.getChoices.go(...this.choicesManagerArgs);
		this.__menuChoiceExecutor.set(this.specificChoicesExecutor);
	}


	close(): void {
		this.open = false;
	}

}
