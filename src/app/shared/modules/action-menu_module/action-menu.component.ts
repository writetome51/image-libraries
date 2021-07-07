import { ActionMenuChoicesExecutorService } from './action-menu-choices-executor.service';
import { Component, OnInit } from '@angular/core';
import { MenuChoice } from '@interfaces/menu-choice.interface';
import { HasContextInputDirective }
	from '@abstract-directives/has-context-input.abstract.directive';
import { ActionMenuContext } from '@interfaces/action-menu-context.interface';


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
	providers: [ActionMenuChoicesExecutorService]
})
export class ActionMenuComponent extends HasContextInputDirective<ActionMenuContext>
	implements OnInit {

	open = false;
	choices: MenuChoice[] = [];


	constructor(private __menuChoicesExecutor: ActionMenuChoicesExecutorService) {
		super();
	}


	ngOnInit() {
		this.choices =
			this.context.menuChoicesManager.getChoices(...this.context.getChoicesArgs);

		this.__menuChoicesExecutor.set(this.context.choicesExecutor);
	}


	close(): void {
		this.open = false;
	}

}
