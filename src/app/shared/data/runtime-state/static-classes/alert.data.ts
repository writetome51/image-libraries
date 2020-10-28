export class AlertData {

	private static __error = ''; // error message
	private static __success = ''; // success message


	static get data() {
		if (this.success) return this.success;
		else return this.error;
	}


	static set success(value) {
		this.__error = ''; // If there's success, there can't be an error.
		this.__success = value;
	}


	static get success() {
		return this.__success;
	}


	static set error(value) {
		this.__success = '';  // If there's an error, there can't be success.
		this.__error = value;
	}


	static get error() {
		return this.__error;
	}


	static clear() {
		this.__success = '';
		this.__error = '';
	}

}
