import { ClickStartedExecutionStatusData }
	from '@runtime-state-data/click-started-execution-status.data';
import { Input } from '@angular/core';
import { ExecuteFunctionContainerComponent }
	from './execute-function-container.component';


export abstract class ClickExecuteFunctionComponent {

	// required.  Instance of the component this component is used in.
	@Input() container: ExecuteFunctionContainerComponent;

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
