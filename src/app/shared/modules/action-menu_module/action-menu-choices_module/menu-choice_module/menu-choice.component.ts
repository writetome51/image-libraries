import { Component } from '@angular/core';
import { hasValue } from '@writetome51/has-value-no-value';
import { AbstractMenuChoiceComponent } from './abstract-menu-choice.abstract.component';


@Component({
	selector: 'menu-choice',
	template: `
		<li role="presentation" class="menu-choice" [class.dropdown-submenu]="hasSubmenu"
			(click)="toggleClick($event)"
		>
			<hoverable-container class="fill-parent" (unhover)="unclick()">

				<executable-menu-choice-container *ngIf="!(hasSubmenu)" [choice]="data">
				</executable-menu-choice-container>

				<submenu *ngIf="hasSubmenu" [clicked]="clicked" [data]="data"></submenu>

			</hoverable-container>
		</li>
	`,
	styleUrls: ['./menu-choice.component.css']
})
export class MenuChoiceComponent extends AbstractMenuChoiceComponent {

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
