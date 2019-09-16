export abstract class SubscriptionDataGetterService {

	// Use this if you only expect a subscription to `observable` to return data once
	// and then close.

	protected async _getSubscriptionData(observable): Promise<any> {
		return new Promise((returnData) => {
			let subscription = observable.subscribe((result) => {
				returnData(result);
				subscription.unsubscribe();
			});
		});

	}


}
