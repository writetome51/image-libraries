import { IDoThis } from '@interfaces/i-do-this.interface';
import { SubscribableCurrentRouteParamsService }
	from '@services/subscribable-current-route-params.service';
import { UnsubscribeOnDestroyDirective } from '@writetome51/unsubscribe-on-destroy-directive';


export abstract class RouteParametersSubscriberDirective extends UnsubscribeOnDestroyDirective {

	constructor(
		private __currentRouteParams$: SubscribableCurrentRouteParamsService,
		private __runTasksAfterRouteParamsReceived: IDoThis
	) {
		super();
		this._subscriptions.push(this.__getRouteParamsSubscription());
	}


	private __getRouteParamsSubscription() {
		return this.__currentRouteParams$.subscribe(
			async (params) => await this.__runTasksAfterRouteParamsReceived.go(params)
		);
	}

}
