import { Injectable } from '@angular/core';
import { CurrentUserService } from '../user/current-user.service';
import { UserValidationRulesService } from '../user/user-validation-rules.service';
import { EmailInputService } from './email-input.service';
import { attach_prefix } from '../../attach-prefix.decorator';

@Injectable({
	providedIn: 'root'
})
@attach_prefix('new')
export class NewEmailInputService extends EmailInputService {
}
