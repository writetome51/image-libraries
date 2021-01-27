import { Injectable } from '@angular/core';
import { PasswordInputService } from '@validating-input/password/password-input.service';
import { PrefixLabel_to_ValidatingInputService } // tslint:disable-next-line:max-line-length
	from '@validating-input/prefix-label-to-validating-input-service/prefix-label-to-validating-input-service.decorator';


@PrefixLabel_to_ValidatingInputService({prefix: 'current'})
export class __CurrentPasswordInputService extends PasswordInputService {
}

@Injectable({providedIn: 'root'})
export class CurrentPasswordInputService extends __CurrentPasswordInputService {
}
