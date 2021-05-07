import { getObjectFromJSON } from 'get-object-from-json';
import { getSubscriptionData } from '@writetome51/get-subscription-data';
import { Subscribable } from 'rxjs';
import { notObject } from '@writetome51/is-object-not-object';
import { IDoThis } from '@interfaces/i-do-this.interface';


export class __GetObjectFromSubscriptionService {

	static async go(subscribable: Subscribable<any>): Promise<any> {
		let result = await getSubscriptionData(subscribable);
		return this.__getAsObject(result);
	}


	private static __getAsObject(result) {
		if (typeof result === 'string') result = getObjectFromJSON(result);

		if (notObject(result)) throw new Error(
			'The result was expected to be an object, but is not.'
		);
		else return result;
	}

}

export const GetObjectFromSubscriptionService: IDoThis = __GetObjectFromSubscriptionService;
