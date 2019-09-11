import { Injectable } from '@angular/core';


@Injectable({
	providedIn: 'root'
})
export class SuccessOrErrorMessageService {

	private __error = ''; // error message
	private __success = ''; // success message


	set success(value) {
		this.__error = '';
		this.__success = value;
	}


	get success() {
		return this.__success;
	}


	set error(value) {
		this.__success = '';
		this.__error = value;
	}


	get error() {
		return this.__error;
	}

}
