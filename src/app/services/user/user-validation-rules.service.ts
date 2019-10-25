import { Injectable } from '@angular/core';


@Injectable({
	providedIn: 'root'
})
export class UserValidationRulesService {


	get passwordMinLength() {
		return 6;
	}


	get emailMinLength() {
		return 6;
	}


	get questionMinLength() {
		return 9;
	}


	get answerMinLength() {
		return 3;
	}


}
