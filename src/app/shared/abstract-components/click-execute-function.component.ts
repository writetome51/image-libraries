import { ClickStartedExecutionStatusData }
	from '@runtime-state-data/click-started-execution-status.data';
import { ClickExecuteFunctionContainerComponent }
	from './click-execute-function-container.component';
import { Input } from '@angular/core';


export abstract class ClickExecuteFunctionComponent {

	// required.  Instance of the component this component is used in.
	@Input() container: ClickExecuteFunctionContainerComponent;

	// Passed to this.container.execute()
	@Input() funcArgs: any[] = [];

	clicked = false;
	executionStatus = ClickStartedExecutionStatusData;


	async runClickHandler(event) {
		event.preventDefault();
		event.stopPropagation();

		this.clicked = true;
		await this.container.execute(this.funcArgs);
		this.clicked = false;
	}

}
