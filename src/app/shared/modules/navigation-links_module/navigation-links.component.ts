import { Component } from '@angular/core';
import { CurrentRouteService } from '@services/current-route.service';
import { Link } from '@interfaces/link.interface';
import { HasDataInputComponent } from '@abstract-components/has-data-input.abstract.component';


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
export class NavigationLinksComponent extends HasDataInputComponent<Link[]> {

	constructor(private __currentRoute: CurrentRouteService) {
		super();
	}


	isCurrentPath(path): boolean {
		return this.__currentRoute.hasPath(path);
	}

}
