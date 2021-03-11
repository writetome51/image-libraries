import { ActivatedRoute, Router } from '@angular/router';
import { Gettable }from '@interfaces/gettable.interface';
import { Injectable } from '@angular/core';
import { Subscribable } from 'rxjs';


@Injectable({providedIn: 'root'})
export class CurrentRouteService implements Gettable<string> {

	get params(): object {
		return this.__activatedRoute.snapshot.children[0].children[0].params;
	}


	get params$(): Subscribable<object> {
		return this.__activatedRoute.children[0].children[0].params;
	}


	constructor(
		private __router: Router,
		private __activatedRoute: ActivatedRoute
	) {}


	get(): string {
		return this.__router.routerState.snapshot.url;
	}


	// `path` should not include any slashes

	hasPath(path): boolean {
		let url = this.get();
		return (url.endsWith(path) || url.includes(`/${path}/`));
	}

}
