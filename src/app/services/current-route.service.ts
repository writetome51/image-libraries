import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({providedIn: 'root'})

export class CurrentRouteService {


	get data(): string {
		return this.__router.routerState.snapshot.url;
	}


	constructor(private __router: Router) {
	}


	// `route` should not include any slashes

	isActive(route): boolean {
		return (this.data.endsWith(route) || this.data.includes(`/${route}/`));
	}


}
