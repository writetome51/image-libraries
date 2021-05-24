import { removeByIndex } from '@writetome51/array-remove-by-index';
import { Alert } from '@interfaces/alert.interface';
import { getByTest } from '@writetome51/array-get-by-test';
import { not } from '@writetome51/not';


export class AlertsService {

	private static __data: Alert[] = [];


	static get() {
		return this.__data;
	}


	static setSuccess(message) {
		if (not(this.includesSuccess(message))) this.__data.push({message, isError: false});
	}


	static setError(message) {
		if (not(this.includesError(message))) this.__data.push({message, isError: true});
	}


	static clearAlert(index: number) {
		removeByIndex(index, this.__data);
	}


	static clearAll() {
		this.__data = [];
	}


	static includesSuccess(message): boolean {
		return this.__includesMatch((alert) => not(alert.isError) && (alert.message === message))
	}


	static includesError(message): boolean {
		return this.__includesMatch((alert) => alert.isError && (alert.message === message))
	}


	private static __includesMatch(test: (alert: Alert) => boolean) {
		return getByTest(test, this.get()).length > 0;
	}

}
