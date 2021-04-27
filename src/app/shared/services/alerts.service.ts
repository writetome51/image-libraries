import { removeByIndex } from '@writetome51/array-remove-by-index';
import { Alert } from '@interfaces/alert.interface';


export class AlertsService {

	private static __data: Alert[] = [];


	static get count() {
		return this.__data.length;
	}


	static getAlert(index: number): Alert {
		return this.__data[index];
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
