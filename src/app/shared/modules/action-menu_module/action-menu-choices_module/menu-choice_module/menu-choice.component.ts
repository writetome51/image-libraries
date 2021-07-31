import { Component } from '@angular/core';
import { hasValue } from '@writetome51/has-value-no-value';
import { HasDataInputDirective }
	from '@app/shared/abstract-directives/has-data-input.abstract.directive';
import { MenuChoice } from '@interfaces/menu-choice.interface';


@Component({
	selector: 'menu-choice',
	template: `
		<li role="presentation" class="menu-choice" [class.dropdown-submenu]="hasSubmenu"
			(click)="toggleClick($event)"
		>
			<hoverable-container class="fill-parent" (unhover)="unclick()">

				<submenu *ngIf="hasSubmenu; else showExecutableChoice"
					[clicked]="clicked" [data]="data"
				></submenu>

				<ng-template #showExecutableChoice>
					<executable-menu-choice-context [choice]="data">
					</executable-menu-choice-context>
				</ng-template>

			</hoverable-container>
		</li>
	`,
	styleUrls: ['./menu-choice.component.css']
})
export class MenuChoiceComponent extends HasDataInputDirective<MenuChoice> {

	clicked = false;


	get hasSubmenu(): boolean {
		return hasValue(this.data.submenu);
	}


	toggleClick(event): void {
		event.preventDefault();
		event.stopPropagation();
		this.clicked = !(this.clicked);
	}


	unclick(): void {
		this.clicked = false;
	}

}
