import { CurrentRouteService } from '@services/current-route.service';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { UnsubscribeOnDestroyDirective } from '@writetome51/unsubscribe-on-destroy-directive';


export abstract class RouteParametersSubscriberDirective extends UnsubscribeOnDestroyDirective {

	constructor(
		private __currentRoute: CurrentRouteService,
		private __runTasksAfterRouteParamsReceived: IDoThis
	) {
		super();
		this._subscriptions.push(this.__getRouteParamsSubscription());
	}


	private __getRouteParamsSubscription() {
		return this.__currentRoute.params$.subscribe(
			async (params) => await this.__runTasksAfterRouteParamsReceived.go(params)
		);
	}

}
