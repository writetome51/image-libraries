import { ClickExecuteFunctionContainerComponent }
	from '@abstract-components/click-execute-function-container.abstract.component';
import { Processor } from '@interfaces/processor.interface';


export abstract class ClickExecuteProcessContainerComponent
	extends ClickExecuteFunctionContainerComponent {

	constructor(protected _processor?: Processor) {
		super();
	}


	protected async _func(...args) {
		await this._processor.process(...args);
	}

}
