import { Input } from '@angular/core';
import { StartDataProcessComponent } from './start-data-process.component';
import { ClickStartedProcessingStatusData }
	from '@runtime-state-data/click-started-processing-status.data';



export abstract class ClickStartDataProcessElementComponent {

	// required.  Instance of the component this component is used in.
	@Input() context: StartDataProcessComponent;

	// Passed to this.context.start()
	@Input() processArgs: any[] = [];

	clicked = false;
	processingStatus = ClickStartedProcessingStatusData;


	async runClickHandler(event) {
		event.preventDefault();

		this.clicked = true;
		await this.context.start(this.processArgs);
		this.clicked = false;
	}


}
