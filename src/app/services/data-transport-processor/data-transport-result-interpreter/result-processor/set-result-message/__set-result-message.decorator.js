"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
var get_class_modification_decorator_1 = require("@writetome51/get-class-modification-decorator");

exports.__SetResultMessageDecorator = get_class_modification_decorator_1.getClassModificationDecorator(
	function(instance, decoratorArgs) {
		instance.resultMessage = decoratorArgs[0];
	}
);
