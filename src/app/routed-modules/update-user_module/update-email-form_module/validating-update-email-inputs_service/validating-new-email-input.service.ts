import { ValidatingEmailInputService } from '@validating-input/validating-email-input.service';
import { Injectable } from '@angular/core';
import { UpdateUserServicesModule } from '../../update-user-services.module';
import { PrefixLabel_to_ValidatingInputService }
	from '@decorators/prefix-label-to-validating-input-service_decorator/prefix-label-to-validating-input-service.decorator';


@PrefixLabel_to_ValidatingInputService({prefix: 'new', prefix_propertyToBind: true})
export class __ValidatingNewEmailInputService extends ValidatingEmailInputService {}

@Injectable({providedIn: UpdateUserServicesModule})
export class ValidatingNewEmailInputService extends __ValidatingNewEmailInputService {}
