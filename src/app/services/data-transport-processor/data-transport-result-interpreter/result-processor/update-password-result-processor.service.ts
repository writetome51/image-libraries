import { Injectable } from '@angular/core';
import { UpdateEmailOrPasswordResultProcessorService }
	from './update-email-or-password-result-processor.service';
import { SetResultMessage } from './set-result-message/set-result-message.decorator';


@SetResultMessage('Password updated')

export class __UpdatePasswordResultProcessorService
	extends UpdateEmailOrPasswordResultProcessorService {
}


@Injectable({providedIn: 'root'})

export class UpdatePasswordResultProcessorService extends __UpdatePasswordResultProcessorService {
}
