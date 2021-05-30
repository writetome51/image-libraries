import { ClickExecuteFunctionContextDirective }
	from './click-execute-function-context.abstract.directive';
import { IDoThis } from '@interfaces/i-do-this.interface';


export abstract class ClickExecuteIDoThisContextDirective
	extends ClickExecuteFunctionContextDirective {

	constructor(protected _iDoThis?: IDoThis) {
		super();
	}


	protected async _func(...args) {
		await this._iDoThis.go(...args);
	}

}
