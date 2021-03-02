import { Injectable } from '@angular/core';
import { PasswordInputService } from '@validating-input/password-related/password-input.service';
import { PrefixLabel_to_ValidatingInputService } // tslint:disable-next-line:max-line-length
	from '@decorators/prefix-label-to-validating-input-service/prefix-label-to-validating-input-service.decorator';
import { UpdateUserServicesModule } from '@app/routed-modules/update-user/update-user-services.module';


@PrefixLabel_to_ValidatingInputService({prefix: 'current'})
export class __CurrentPasswordInputService extends PasswordInputService {
}

@Injectable({providedIn: UpdateUserServicesModule})
export class CurrentPasswordInputService extends __CurrentPasswordInputService {
}
