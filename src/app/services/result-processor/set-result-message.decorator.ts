import { getClassModificationDecorator } from '@writetome51/get-class-modification-decorator';
import { UpdateEmailOrPasswordResultProcessorService }
	from './update-email-or-password-result-processor.service';


export const SetResultMessage: (message: string) => Function =
	getClassModificationDecorator(
		(
			instance: UpdateEmailOrPasswordResultProcessorService,
			decoratorArgs: [string]
		) => {
			instance.resultMessage = decoratorArgs[0];
		}
	)
;
