import { Injectable } from '@angular/core';
import { PasswordInputService } from '@validating-input/password-related/password-input.service';
import { PrefixLabel_to_ValidatingInputService } // tslint:disable-next-line:max-line-length
	from '@validating-input/../../../../shared/decorators/prefix-label-to-validating-input-service/prefix-label-to-validating-input-service.decorator';
import { UpdateUserServicesModule } from '@app/routed-modules/update-user/update-user-services.module';


@PrefixLabel_to_ValidatingInputService({prefix: 'new', prefix_propertyToBind: true})
export class __NewPasswordInputService extends PasswordInputService {
}

@Injectable({providedIn: UpdateUserServicesModule})
export class NewPasswordInputService extends __NewPasswordInputService {
}
