import { Component, Input, OnInit } from '@angular/core';
import { GetMenuChoices } from '@action-menu/get-menu-choices.interface';
import { MenuChoice } from './menu-choice.interface';
import { ActionMenuChoiceExecutorService } from './action-menu-choice-executor.service';
import { SpecificChoicesExecutorService } from './specific-choices-executor.service';


@Component({
	selector: 'action-menu',
	template: `
		<hoverable-container (unhover)="close()">
			<div class="action-menu-container">

				<div class="dropdown  twitter-bootstrap-dropdown-button-and-menu">

					<action-menu-button [menu]="this"></action-menu-button>

					<action-menu-choices *ngIf="open" [data]="choices"></action-menu-choices>

				</div>

			</div>
		</hoverable-container>
	`,

	// Creates new instance of service for every instance of this component.
	providers: [ActionMenuChoiceExecutorService]
})
export class ActionMenuComponent implements OnInit {

	open = false;
	choices: MenuChoice[] = [];

	@Input() specificChoicesExecutor: SpecificChoicesExecutorService;
	@Input() getChoices: GetMenuChoices;
	@Input() getChoicesArgs? = [];


	constructor(private __menuChoiceExecutor: ActionMenuChoiceExecutorService) {
	}


	ngOnInit() {
		this.choices = this.getChoices.go(...this.getChoicesArgs);
		this.__menuChoiceExecutor.set(this.specificChoicesExecutor);
	}


	close(): void {
		this.open = false;
	}

}
