import { getClassModificationDecorator } from '@writetome51/get-class-modification-decorator';


export const __SetResultMessageDecorator = getClassModificationDecorator(
	function(instance, decoratorArgs) {
		instance.resultMessage = decoratorArgs[0];
	}
);
