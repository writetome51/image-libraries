import { SetResultMessage } from '../result-processor/set-result-message.decorator';
import { UpdateEmailOrPasswordResultInterpreterService }
	from './update-email-or-password-result-interpreter.service';
import { Injectable } from '@angular/core';


@SetResultMessage('Password updated.')
export class __UpdatePasswordResultInterpreterService extends UpdateEmailOrPasswordResultInterpreterService {
}


@Injectable({providedIn: 'root'})
export class UpdatePasswordResultInterpreterService extends __UpdatePasswordResultInterpreterService {
}
