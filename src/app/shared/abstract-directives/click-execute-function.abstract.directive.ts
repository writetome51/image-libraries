import { ClickStartedExecutionStatusData }
	from '@runtime-state-data/click-started-execution-status.data';
import { ClickExecuteFunctionContextDirective }
	from './click-execute-function-context.abstract.directive';
import { Directive, Input } from '@angular/core';
import { HasContextInputDirective }
	from './/has-context-input.abstract.directive';


@Directive({selector: ''}) // prevents Angular build error
export abstract class ClickExecuteFunctionDirective
	extends HasContextInputDirective<ClickExecuteFunctionContextDirective>{

	// Passed to this.context.execute()
	@Input() funcArgs: any[] = [];

	clicked = false;
	executionStatus = ClickStartedExecutionStatusData;


	async execute(event) {
		event.preventDefault();
		event.stopPropagation();

		this.clicked = true;
		await this.context.execute(this.funcArgs);
		this.clicked = false;
	}

}
