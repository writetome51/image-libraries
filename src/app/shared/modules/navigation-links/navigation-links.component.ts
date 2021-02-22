import { Component, Input } from '@angular/core';
import { CurrentRouteService } from '@services/current-route.service';
import { Link } from '@interfaces/link.interface';


@Component({
	selector: 'navigation-links',
	template: `
		<div *ngFor="let link of data; let i = index" class="nav-link-container">

			<a *ngIf="!(isCurrentPath(link.path))" [routerLink]="link.path">
				{{link.label}}
			</a>

			<span *ngIf="isCurrentPath(link.path)">{{link.label}}</span>

			<span *ngIf="i < (data.length - 1)">&nbsp;|&nbsp;</span>

		</div>
	`
})
export class NavigationLinksComponent {

	@Input() data: Link[];


	constructor(private __currentRoute: CurrentRouteService) {
	}


	isCurrentPath(path): boolean {
		return this.__currentRoute.hasPath(path);
	}

}
