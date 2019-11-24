import { getClassModificationDecorator } from '@writetome51/get-class-modification-decorator';
import { UpdateEmailOrPasswordResultInterpreterService }
	from './update-email-or-password-result-interpreter.service';


export const Set_messageForResultProcessor: (message: string) => Function =
	getClassModificationDecorator(
		(
			instance: UpdateEmailOrPasswordResultInterpreterService,
			decoratorArgs: [string]
		) => {
			instance.messageForResultProcessor = decoratorArgs[0];
		}
	)
;
