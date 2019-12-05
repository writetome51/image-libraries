// Transpiled from '__class-mod-decorator-original.ts'

"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
var get_class_modification_decorator_1 = require("@writetome51/get-class-modification-decorator");
//  This module is in separate file in order to avoid angular compile error:
//  'Function calls are not supported in decorators but (functionName) was called in...'

exports.__classModDecorator_BindObject =
	get_class_modification_decorator_1.getClassModificationDecorator(function(inputs, decoratorArgs) {
		var obj = decoratorArgs[0];
		for (var i = 0; i < inputs.data.length; ++i) {
			var input = inputs.data[i];
			input.objectToBind = obj;
			if (input.propertyToMatch)
				input.objectToMatch = obj;
		}
	});
