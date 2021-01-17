import { ClickExecuteFunctionContainerComponent }
	from '@abstract-components/click-execute-function-container.component';
import { Processor } from '@interfaces/processor.interface';


export abstract class ClickExecuteProcessContainerComponent
	extends ClickExecuteFunctionContainerComponent {

	constructor(protected _processor?: Processor) {
		super();
	}


	protected _func(...args) {
		this._processor.process(...args);
	}

}
