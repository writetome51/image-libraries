import { ClickStartedExecutionStatusData }
	from '@runtime-state-data/click-started-execution-status.data';
import { ClickExecuteFunctionContextComponent }
	from './click-execute-function-context.abstract.component';
import { Component, Input } from '@angular/core';
import { HasContextInputComponent }
	from '@abstract-components/has-context-input.abstract.component';


@Component({selector: '', template: ''}) // prevents Angular build error
export abstract class ClickExecuteFunctionComponent
	extends HasContextInputComponent<ClickExecuteFunctionContextComponent>{

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
