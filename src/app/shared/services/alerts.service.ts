import { removeByIndex } from '@writetome51/array-remove-by-index';
import { Alert } from '@interfaces/alert.interface';
import { Gettable } from '@interfaces/gettable.interface';


export class __AlertsService {

	private static __data: Alert[] = [];


	static get() {
		return this.__data;
	}


	static setSuccess(message) {
		this.__data.push({message, isError: false});
	}


	static setError(message) {
		this.__data.push({message, isError: true});
	}


	static clearAlert(index: number) {
		removeByIndex(index, this.__data);
	}


	static clearAll() {
		this.__data = [];
	}

}

export const AlertsService: Gettable<Alert[]> = __AlertsService;
