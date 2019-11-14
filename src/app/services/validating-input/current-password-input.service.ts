import { Injectable } from '@angular/core';
import { PasswordInputService } from './password-input.service';
import { attach_prefix_ValidatingInputService } from './attach-prefix.decorator';


@Injectable({providedIn: 'root'})
@attach_prefix_ValidatingInputService('current')

export class CurrentPasswordInputService extends PasswordInputService {
}
