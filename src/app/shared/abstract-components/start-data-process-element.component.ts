import { Input } from '@angular/core';
import { StartDataProcessComponent } from './start-data-process.component';
import { ClickInitiatedProcessingStatusData }
	from '../../../data-structures/runtime-state-data/click-initiated-processing-status.data';


export abstract class StartDataProcessElementComponent {

	// required.  Instance of the component this component is used in.
	@Input() context: StartDataProcessComponent;

	// Passed to this.context.start()
	@Input() processArgs: any[] = [];

	clicked = false;
	processingStatus = ClickInitiatedProcessingStatusData;


	async runClickHandler(event) {
		event.preventDefault();

		this.clicked = true;
		await this.context.start(this.processArgs);
		this.clicked = false;
	}


}
