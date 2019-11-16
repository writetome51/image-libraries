import { getObjectFromJSON } from 'get-object-from-json';
import { getSubscriptionData } from '@writetome51/get-subscription-data';
import { Subscribable } from 'rxjs';


export class GetObjectFromSubscriptionService { // implements IDoThis

	static async go(
		subscribable: Subscribable<any>
	): Promise<any> {
		let result = await getSubscriptionData(subscribable);
		return this.__getAsObject(result);
	}


	private static __getAsObject(result) {
		if (typeof result === 'string') {
			result = getObjectFromJSON(result);
		}
		return result;
	}

}
