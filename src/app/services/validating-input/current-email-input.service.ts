import { Injectable } from '@angular/core';
import { EmailInputService } from './email-input.service';
import { attach_prefix_ValidatingInputService } from './attach-prefix.decorator';


@Injectable({providedIn: 'root'})
@attach_prefix_ValidatingInputService('current')

export class CurrentEmailInputService extends EmailInputService {
}
