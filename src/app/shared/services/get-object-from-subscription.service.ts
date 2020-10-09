import { getObjectFromJSON } from 'get-object-from-json';
import { getSubscriptionData } from '@writetome51/get-subscription-data';
import { Subscribable } from 'rxjs';


export class GetObjectFromSubscriptionService {

	static async go(
		subscribable: Subscribable<any>
	): Promise<any> {
		let result = await getSubscriptionData(subscribable);
		return this.__getAsObjectIfString(result);
	}


	private static __getAsObjectIfString(result) {
		if (typeof result === 'string') {
			result = getObjectFromJSON(result);
		}
		return result;
	}

}
