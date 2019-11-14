import { Injectable } from '@angular/core';
import { PasswordInputService } from './password-input.service';
import { attach_prefix_ValidatingInputService } from './attach-prefix.decorator';


@Injectable({providedIn: 'root'})
@attach_prefix_ValidatingInputService('new')

export class NewPasswordInputService extends PasswordInputService {
}
