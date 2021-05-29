import { Component } from '@angular/core';
import { hasValue } from '@writetome51/has-value-no-value';
import { HasDataInputDirective } from '@app/shared/abstract-directives/has-data-input.abstract.directive';
import { MenuChoice } from '@action-menu_module/menu-choice.interface';


@Component({
	selector: 'menu-choice',
	template: `
		<li role="presentation" class="menu-choice" [class.dropdown-submenu]="hasSubmenu"
			(click)="toggleClick($event)"
		>
			<hoverable-container class="fill-parent" (unhover)="unclick()">

				<executable-menu-choice-context *ngIf="!(hasSubmenu)" [choice]="data">
				</executable-menu-choice-context>

				<submenu *ngIf="hasSubmenu" [clicked]="clicked" [data]="data"></submenu>

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
