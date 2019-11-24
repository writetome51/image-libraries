import { SetResultMessage } from '../result-processor/set-result-message.decorator';
import { UpdateEmailOrPasswordResultInterpreterService }
	from './update-email-or-password-result-interpreter.service';
import { Injectable } from '@angular/core';


@SetResultMessage('Email updated.')
export class __UpdateEmailResultInterpreterService extends UpdateEmailOrPasswordResultInterpreterService {
}


@Injectable({providedIn: 'root'})
export class UpdateEmailResultInterpreterService extends __UpdateEmailResultInterpreterService {
}
