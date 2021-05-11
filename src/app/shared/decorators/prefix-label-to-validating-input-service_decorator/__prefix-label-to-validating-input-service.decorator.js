import { isArray } from "@writetome51/is-array-not-array";
import { getClassModificationDecorator } from "@writetome51/get-class-modification-decorator";

// Transpiled from '__prefix-label-to-validating-input-service.decorator.original.ts'
//  This module is in separate file in order to avoid angular compile error:
//  'Function calls are not supported in decorators but (functionName) was called in...'

export const __PrefixLabel_to_ValidatingInputServiceDecorator = getClassModificationDecorator(
	function(instance, decoratorArgs) {
		var _a = decoratorArgs[0], prefix = _a.prefix,
			prefix_propertyToBind = _a.prefix_propertyToBind;

		instance.data.id = prefix + '-' + instance.data.id;
		if (prefix_propertyToBind) {
			if (instance.data.propertyToBind) {
				instance.data.propertyToBind =
					prefix + instance.data.propertyToBind[0].toUpperCase() +
					instance.data.propertyToBind.slice(1);
			}
			else instance.data.propertyToBind = prefix;
		}
		var capitalizedStr = prefix[0].toUpperCase() + prefix.slice(1);

		instance.data.label = capitalizedStr + ' ' + instance.data.label;

		if (isArray(instance.data.errorMessage)) {

			for (var i = 0, len = instance.data.errorMessage.length; i < len; ++i) {
				var message = instance.data.errorMessage[i];

				instance.data.errorMessage[i] = "The " + prefix + " " + message.slice(4);
			}
		}
		else instance.data.errorMessage =
			"The " + prefix + " " + instance.data.errorMessage.slice(4);
	}
);
