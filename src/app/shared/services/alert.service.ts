export class AlertService {

	private static __error = ''; // error message
	private static __success = ''; // success message


	static get data() {
		return this.success ? this.success : this.error;
	}


	static get success() {
		return this.__success;
	}


	static get error() {
		return this.__error;
	}


	static setSuccess(value) {
		this.__error = ''; // If there's success, there can't be an error.
		this.__success = value;
	}


	static setError(value) {
		this.__success = '';  // If there's an error, there can't be success.
		this.__error = value;
	}


	static clear() {
		this.__success = '';
		this.__error = '';
	}

}
