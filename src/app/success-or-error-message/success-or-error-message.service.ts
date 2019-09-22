import { Injectable } from '@angular/core';


@Injectable({
	providedIn: 'root'
})
export class SuccessOrErrorMessageService {

	private __error = ''; // error message
	private __success = ''; // success message


	get message(){
		if (this.success) return this.success;
		else return this.error;
	}


	set success(value) {
		this.__error = ''; // If there's success, there can't be an error.
		this.__success = value;
	}


	get success() {
		return this.__success;
	}


	set error(value) {
		this.__success = '';  // If there's an error, there can't be success.
		this.__error = value;
	}


	get error() {
		return this.__error;
	}

}
