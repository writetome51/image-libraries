import { ChoicesProcessorService } from './choices-processor.service';
import { Component, Input, OnInit } from '@angular/core';
import { MenuChoice } from '@interfaces/menu-choice';
import { MenuChoicesManager } from '@interfaces/menu-choices-manager';
import { MenuChoiceProcessorService } from '@action-menu/menu-choice-processor.service';


@Component({
	selector: 'action-menu',
	templateUrl: './action-menu.component.html'
})
export class ActionMenuComponent implements OnInit {

	open = false;
	choices: MenuChoice[] = [];

	@Input() choicesProcessor: ChoicesProcessorService;
	@Input() choicesManager: MenuChoicesManager;
	@Input() choicesManagerArgs? = [];


	constructor(private __menuChoiceProcessor: MenuChoiceProcessorService) {
	}


	ngOnInit() {
		this.choices = this.choicesManager.getChoices(...this.choicesManagerArgs);
		this.__menuChoiceProcessor.set(this.choicesProcessor);
	}


	close(): void {
		this.open = false;
	}

}
