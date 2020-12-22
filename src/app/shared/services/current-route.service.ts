import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscribable } from 'rxjs';


@Injectable({providedIn: 'root'})
export class CurrentRouteService {


	get data(): string {
		return this.__router.routerState.snapshot.url;
	}


	get params(): object {
		return this.__activatedRoute.snapshot.children[0].children[0].params;
	}


	get params$(): Subscribable<object> {
		return this.__activatedRoute.children[0].children[0].params;
	}


	constructor(
		private __router: Router,
		private __activatedRoute: ActivatedRoute
	) {
	}


	// `route` should not include any slashes

	isActive(route): boolean {
		return (this.data.endsWith(route) || this.data.includes(`/${route}/`));
	}


}
