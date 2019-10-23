import { getObjectFromJSON } from 'get-object-from-json';
import { getSubscriptionData } from '@writetome51/get-subscription-data';
import { Subscribable } from 'rxjs';


export abstract class ReturnObjectFromSubscriptionService {


	protected async _getObjectFromSubscriptionTo(
		subscribable: Subscribable<any>
	): Promise<any> {
		let result = await getSubscriptionData(subscribable);
		return this.__getAsObject(result);
	}


	private __getAsObject(result) {
		if (typeof result === 'string') {
			result = getObjectFromJSON(result);
		}
		return result;
	}


}
