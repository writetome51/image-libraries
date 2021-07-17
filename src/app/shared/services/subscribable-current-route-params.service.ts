import { ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';
import { Subscribable } from 'rxjs';


@Injectable({providedIn: 'root'})
export class SubscribableCurrentRouteParamsService implements Subscribable<object> {

	constructor(private __activatedRoute: ActivatedRoute) {}


	subscribe(callback) {
		return this.__activatedRoute.children[0].children[0].params.subscribe(callback);
	}

}
