import { __Bind_ValidatingInputsService_to_ObjectDecorator }
	from './__bind-validating-inputs-service-to-object.decorator';


/*****************
Decorator for some subclasses of ValidatingInputsService and ValidatingInputService.
 Usage:

@Bind_ValidatingInputsService_to_Object(obj)
export class TheClass {...}
 *****************/

export const Bind_ValidatingInputsService_to_Object: (obj) => Function =
	__Bind_ValidatingInputsService_to_ObjectDecorator;
