// Transpiled from '__set-result-message.decorator.original.ts'

"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
var is_array_not_array_1 = require("@writetome51/is-array-not-array");
var get_class_modification_decorator_1 = require("@writetome51/get-class-modification-decorator");
//  This module is in separate file in order to avoid angular compile error:
//  'Function calls are not supported in decorators but (functionName) was called in...'

exports.__PrefixLabel_to_ValidatingInputServiceDecorator =
	get_class_modification_decorator_1.getClassModificationDecorator(
		function(instance, decoratorArgs) {
			var _a = decoratorArgs[0], prefix = _a.prefix,
				prefix_propertyToBind = _a.prefix_propertyToBind;

			instance.data.id = prefix + '-' + instance.data.id;
			if (prefix_propertyToBind) {
				if (instance.data.propertyToBind) {
					instance.data.propertyToBind =
						prefix + instance.data.propertyToBind[0].toUpperCase() +
						instance.data.propertyToBind.slice(1);
				} else instance.data.propertyToBind = prefix;
			}
			var capitalizedStr = prefix[0].toUpperCase() + prefix.slice(1);

			instance.data.label = capitalizedStr + ' ' + instance.data.label;
			if (is_array_not_array_1.isArray(instance.data.errorMessage)) {
				// @ts-ignore
				for (var i = 0; i < instance.data.errorMessage.length; ++i) {
					var message = instance.data.errorMessage[i];

					instance.data.errorMessage[i] = "The " + prefix + " " + message.slice(4);
				}
			} else instance.data.errorMessage =
				"The " + prefix + " " + instance.data.errorMessage.slice(4);
		}
	);
