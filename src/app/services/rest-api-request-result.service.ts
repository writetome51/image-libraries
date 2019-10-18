import { getObjectFromJSON } from 'get-object-from-json';
import { hasValue, noValue } from '@writetome51/has-value-no-value';
import { SuccessOrErrorMessageService } from './success-or-error-message.service';


export abstract class RestAPIRequestResultService {


	protected _errorHandler: (errorMessage: string) => void;


	constructor(protected _successOrErrorMessage: SuccessOrErrorMessageService) {
	}


	ifResultSuccessful_processResult(
		result,
		process: (result) => void
	): void {
		result = this.checkForError_returnIfOK(result);
		if (hasValue(result)) {
			process(result);
		}
	}


	checkForError_returnIfOK(result): void | any {
		if (typeof result === 'string') {
			result = getObjectFromJSON(result);
		}

		if (result.error) {
			if (result.error.message) {
				if (noValue(this._errorHandler)) throw new Error('The "_errorHandler" property must' +
					' be set first');
				this._errorHandler(result.error.message);

			} else {
				// This is for displaying unexpected errors.
				this._successOrErrorMessage.error = result.error;
			}
			return;
		}
		else return result;
	}


}
