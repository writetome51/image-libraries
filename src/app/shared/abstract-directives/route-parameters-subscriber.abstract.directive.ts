import { CurrentRouteService } from '@services/current-route.service';
import { GetRouteParamsObserverService }
	from '@services/get-route-params-observer.abstract.service';
import { UnsubscribeOnDestroyDirective } from '@writetome51/unsubscribe-on-destroy-directive';


export abstract class RouteParametersSubscriberDirective extends UnsubscribeOnDestroyDirective {

	constructor(
		private __currentRoute: CurrentRouteService,
		private __getRouteParamsObserver: GetRouteParamsObserverService
	) {
		super();
		this._subscriptions.push(this.__getRouteParamsSubscription());
	}


	private __getRouteParamsSubscription() {
		return this.__currentRoute.params$.subscribe(this.__getRouteParamsObserver.go());
	}

}
