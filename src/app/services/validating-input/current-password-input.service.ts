import { Injectable } from '@angular/core';
import { PasswordInputService } from './password-input.service';
import { PrefixLabel_to_ValidatingInputService }
	from './prefix-label-to-validating-input-service/prefix-label-to-validating-input-service.decorator';


@PrefixLabel_to_ValidatingInputService({prefix: 'current'})

export class __CurrentPasswordInputService extends PasswordInputService {
}


@Injectable({providedIn: 'root'})

export class CurrentPasswordInputService extends __CurrentPasswordInputService {
}
