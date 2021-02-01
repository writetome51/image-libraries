import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscribable } from 'rxjs';
import { GettableDataContainer }
	from '@interfaces/data-container/gettable-data-container.interface';


@Injectable({providedIn: 'root'})
export class CurrentRouteService implements GettableDataContainer<string> {

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


	get(): string {
		return this.__router.routerState.snapshot.url;
	}


	// `path` should not include any slashes

	hasPath(path): boolean {
		let url = this.get();
		return (url.endsWith(path) || url.includes(`/${path}/`));
	}

}
