import { Injectable } from '@angular/core';
import { EmailInputService } from './email-input.service';
import { CurrentInputService } from './current-input.service';


@Injectable({
	providedIn: 'root'
})
export class CurrentEmailInputService extends CurrentInputService {

	constructor(__emailInput: EmailInputService) {
		super(__emailInput);
	}

}
