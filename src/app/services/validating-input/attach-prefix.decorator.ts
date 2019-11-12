import { getClassModificationDecorator } from '../../get-class-modification-decorator';
import { ValidatingInputService } from '../../validating-inputs/validating-input.service';
import { isArray } from '@writetome51/is-array-not-array';


/*****************
Decorator for certain ValidatingInputService subclasses.
 Usage:

@attach_prefix('string')
export class TheClass {...}

 However, so far it seems this thing can't be used with @Injectable()
 decorator.  ( @Injectable() doesn't play well with other decorators. )
 Try this as a workaround:

 export let __ModifiedExampleClass = attach_prefix('prefix')(ExampleClass);

 @Injectable({providedIn: 'root'})
 export class ModifiedExampleClass extends __ModifiedExampleClass {...}

 *****************/

export const attach_prefix: (prefix: string) => Function =
	getClassModificationDecorator((instance: ValidatingInputService, decoratorArgs: [string]) => {

		let str = decoratorArgs[0].toLowerCase().trim();

		instance.data.id = str + '-' + instance.data.id;

		instance.data.propertyToBind = str + instance.data.placeholder;

		let capitalizedStr = str[0].toUpperCase() + str.slice(1);
		instance.data.placeholder = capitalizedStr + ' ' + instance.data.placeholder;

		if (isArray(instance.data.errorMessage)) {
			// @ts-ignore
			for (let i = 0; i < instance.data.errorMessage.length; ++i) {
				let message = instance.data.errorMessage[i];
				// @ts-ignore
				instance.data.errorMessage[i] = `The ${str} ${message.slice(4)}`;
			}
		}
		else instance.data.errorMessage = `The ${str} ${instance.data.errorMessage.slice(4)}`;
	});
