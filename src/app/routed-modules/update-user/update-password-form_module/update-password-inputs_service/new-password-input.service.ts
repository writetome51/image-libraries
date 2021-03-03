import { Injectable } from '@angular/core';
import { PasswordInputService } from '@services/validating-input/password-input.service';
import { UpdateUserServicesModule } from '@app/routed-modules/update-user/update-user-services.module';
import { PrefixLabel_to_ValidatingInputService }
	from '@decorators/prefix-label-to-validating-input-service/prefix-label-to-validating-input-service.decorator';


@PrefixLabel_to_ValidatingInputService({prefix: 'new', prefix_propertyToBind: true})
export class __NewPasswordInputService extends PasswordInputService {
}

@Injectable({providedIn: UpdateUserServicesModule})
export class NewPasswordInputService extends __NewPasswordInputService {
}
