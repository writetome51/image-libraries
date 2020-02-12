import { Injectable } from '@angular/core';
import { UpdateEmailOrPasswordResultProcessorService }
	from './update-email-or-password-result-processor.service';
import { SetResultMessage } from './set-result-message/set-result-message.decorator';


@Injectable()
@SetResultMessage('Email updated')
export class __UpdateEmailResultProcessorService extends UpdateEmailOrPasswordResultProcessorService {
}

@Injectable({providedIn: 'root'})
export class UpdateEmailResultProcessorService extends __UpdateEmailResultProcessorService {
}
