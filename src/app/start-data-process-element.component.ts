import { Component, Input } from '@angular/core';
import { StartDataProcessComponent } from './start-data-process.component';


export abstract class StartDataProcessElementComponent {

	// required.  Instance of the component this component is used in.
	@Input() context: StartDataProcessComponent;
	@Input() processArgs: any[] = [];

	clicked = false;


	async runClickHandler(event) {
		event.preventDefault();

		this.clicked = true;
		await this.context.start(this.processArgs);
		this.clicked = false;
	}


}
