import { ExecuteFunctionContainerComponent }
	from '@abstract-components/execute-function-container.component';
import { Processor } from '@interfaces/processor';


export abstract class StartProcessContainerComponent
	extends ExecuteFunctionContainerComponent {

	constructor(protected _processor?: Processor) {
		super();
	}


	protected _func(...args) {
		this._processor.process(...args);
	}

}
