import { Injectable } from '@angular/core';
import { PrefixLabel_to_ValidatingInputService }
	from './prefix-label-to-validating-input-service.decorator';
import { LoggedInEmailVerificationInputService } from './logged-in-email-verification-input.service';


@PrefixLabel_to_ValidatingInputService({prefix: 'current'})

export class __CurrentEmailInputService extends LoggedInEmailVerificationInputService {
}


@Injectable({providedIn: 'root'})

export class CurrentEmailInputService extends __CurrentEmailInputService {
}
