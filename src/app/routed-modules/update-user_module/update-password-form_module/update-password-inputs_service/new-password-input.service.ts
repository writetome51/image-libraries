import { Injectable } from '@angular/core';
import { PasswordInputService } from '@validating-input/password-input.service';
import { UpdateUserServicesModule } from '../../update-user-services.module';
import { PrefixLabel_to_ValidatingInputService }
	from '@decorators/prefix-label-to-validating-input-service_decorator/prefix-label-to-validating-input-service.decorator';


@PrefixLabel_to_ValidatingInputService({prefix: 'new', prefix_propertyToBind: true})
export class __NewPasswordInputService extends PasswordInputService {}

@Injectable({providedIn: UpdateUserServicesModule})
export class NewPasswordInputService extends __NewPasswordInputService {}
