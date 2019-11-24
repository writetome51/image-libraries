import { Set_messageForResultProcessor } from './set-message-for-result-processor.decorator';
import { UpdateEmailOrPasswordResultInterpreterService }
	from './update-email-or-password-result-interpreter.service';
import { Injectable } from '@angular/core';


@Set_messageForResultProcessor('Email updated.')
export class __UpdateEmailResultInterpreterService extends UpdateEmailOrPasswordResultInterpreterService {
}


@Injectable({providedIn: 'root'})
export class UpdateEmailResultInterpreterService extends __UpdateEmailResultInterpreterService {
}
