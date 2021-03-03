import { EmailInputService } from '@services/validating-input/email-input.service';
import { Injectable } from '@angular/core';
import { UpdateUserServicesModule } from '@app/routed-modules/update-user/update-user-services.module';
import { PrefixLabel_to_ValidatingInputService } from '@app/shared/decorators/prefix-label-to-validating-input-service/prefix-label-to-validating-input-service.decorator';


@PrefixLabel_to_ValidatingInputService({prefix: 'new', prefix_propertyToBind: true})
export class __NewEmailInputService extends EmailInputService {
}

@Injectable({providedIn: UpdateUserServicesModule})
export class NewEmailInputService extends __NewEmailInputService {
}
