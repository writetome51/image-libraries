import { Component } from '@angular/core';
import { CurrentRouteService } from '@services/current-route.service';
import { Link } from '@interfaces/has-label/link/link.interface';
import { LoggedInNavigatorLinkData } from './logged-in-navigator-link.data';


@Component({
	selector: 'navigator-links',
	template: `
		<div *ngFor="let link of data" class="nav-link-container">

			<a *ngIf="!(isCurrentPath(link.path))" [routerLink]="link.path">
				{{link.label}}
			</a>

			<span *ngIf="isCurrentPath(link.path)">{{link.label}}</span>

		</div>
	`
})
export class NavigatorLinksComponent {

	data: Link[] = Object.values(LoggedInNavigatorLinkData);


	constructor(private __currentRoute: CurrentRouteService) {
	}


	isCurrentPath(path): boolean {
		return this.__currentRoute.hasPath(path);
	}

}
