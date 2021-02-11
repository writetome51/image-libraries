import { Component, Input } from '@angular/core';
import { CurrentRouteService } from '@services/current-route.service';
import { LinkedTemplateWithHeading } from './linked-template-with-heading.interface';


@Component({
	selector: 'update-user-choices',
	template: `
		<nav>
			<div *ngFor="let choice of data; let i = index" class="nav-link-container">

				<a *ngIf="!(isCurrentPath(choice.link.path))" [routerLink]="choice.link.path">
					{{choice.link.label}}
				</a>

				<span *ngIf="isCurrentPath(choice.link.path)">{{choice.link.label}}</span>

				<span *ngIf="i < (data.length - 1)"> |</span>
			</div>
		</nav>
	`
})
export class UpdateUserChoicesComponent {

	@Input() data: LinkedTemplateWithHeading[];


	constructor(private __currentRoute: CurrentRouteService) {
	}


	isCurrentPath(path): boolean {
		return this.__currentRoute.hasPath(path);
	}

}
