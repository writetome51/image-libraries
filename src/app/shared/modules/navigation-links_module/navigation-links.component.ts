import { Component } from '@angular/core';
import { CurrentRouteService } from '@services/current-route.service';
import { Link } from '@interfaces/link.interface';
import { HasDataInputDirective } from '@abstract-directives/has-data-input.abstract.directive';


@Component({
	selector: 'navigation-links',
	template: `
		<div *ngFor="let link of data; let i = index" class="nav-link-container">

			<span *ngIf="isCurrentPath(link.path); else showActiveLink">{{link.label}}</span>

			<ng-template #showActiveLink>
				<a [routerLink]="link.path">{{link.label}}</a>
			</ng-template>

			<span *ngIf="i < (data.length - 1)">&nbsp;|&nbsp;</span>

		</div>
	`
})
export class NavigationLinksComponent extends HasDataInputDirective<Link[]> {

	constructor(private __currentRoute: CurrentRouteService) {
		super();
	}


	isCurrentPath(path): boolean {
		return this.__currentRoute.hasPath(path);
	}

}
