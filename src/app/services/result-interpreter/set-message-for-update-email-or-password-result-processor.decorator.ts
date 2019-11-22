import { getClassModificationDecorator } from '@writetome51/get-class-modification-decorator';
import { UpdateEmailOrPasswordResultInterpreterService }
	from './update-email-or-password-result-interpreter.service';


/*****************
Decorator for subclasses of UpdateEmailOrPasswordResultInterpreterService.
 Usage:

@SetMessageFor_UpdateEmailOrPasswordResultProcessor(message)
export class TheClass {...}
 *****************/

export const SetMessageFor_UpdateEmailOrPasswordResultProcessor: (message: string) => Function =
	getClassModificationDecorator(
		(instance: UpdateEmailOrPasswordResultInterpreterService, decoratorArgs: [string]) => {
			instance.messageFor_resultProcessor = decoratorArgs[0];
		}
	)
;
