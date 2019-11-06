import { Injectable } from '@angular/core';
import { CurrentInputService } from './current-input.service';
import { PasswordInputService } from './password-input.service';


@Injectable({
	providedIn: 'root'
})
export class CurrentPasswordInputService extends CurrentInputService {

	constructor(__passwordInput: PasswordInputService) {
		super(__passwordInput);
	}

}
