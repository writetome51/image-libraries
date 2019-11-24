import { Set_messageForResultProcessor } from './set-message-for-result-processor.decorator';
import { UpdateEmailOrPasswordResultInterpreterService }
	from './update-email-or-password-result-interpreter.service';
import { Injectable } from '@angular/core';


@Set_messageForResultProcessor('Password updated.')
export class __UpdatePasswordResultInterpreterService extends UpdateEmailOrPasswordResultInterpreterService {
}


@Injectable({providedIn: 'root'})
export class UpdatePasswordResultInterpreterService extends __UpdatePasswordResultInterpreterService {
}
