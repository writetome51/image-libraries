import { Component, Input } from '@angular/core';


@Component({
	selector: 'page-link',
	template: `<a [routerLink]="routerLink"><ng-content></ng-content></a>`
})
export class PageLinkComponent {

	@Input() pageNumber: number;
	@Input() routeBeforePageNumber: string;


	get routerLink(): any[] {
		return ['/' + this.routeBeforePageNumber, this.pageNumber];
	}

}
