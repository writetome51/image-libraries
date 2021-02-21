import { EmailInputService } from '@validating-input/email-input.service';
import { Injectable } from '@angular/core';
import { PrefixLabel_to_ValidatingInputService }
	from '@validating-input/prefix-label-to-validating-input-service_decorator/prefix-label-to-validating-input-service.decorator';
import { UpdateUserServicesModule } from '@app/routed-modules/update-user/update-user-services.module';


@PrefixLabel_to_ValidatingInputService({prefix: 'new', prefix_propertyToBind: true})
export class __NewEmailInputService extends EmailInputService {
}

@Injectable({providedIn: UpdateUserServicesModule})
export class NewEmailInputService extends __NewEmailInputService {
}