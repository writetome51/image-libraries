import { DataOperationStatusService } from '../../services/data-operation-status.service';
import { LoginProcessorService }
	from '../../services/authentication/login-processor/login-processor.service';
import { ValidatingInput } from '../../validating-inputs/validating-input';
import { ValidatingInputsService } from '../../validating-inputs/validating-inputs.service';


export abstract class ValidatingInputsFormComponent {


	constructor(
		public formInputs: ValidatingInputsService,
		public dataOperationBegun: DataOperationStatusService,
		private __loginProcessor: LoginProcessorService
	) {
	}


	get inputs(): ValidatingInput[] {
		return this.formInputs.data;
	}


	async login() {
		this.dataOperationBegun.waitingForResult = true;
		await this.__loginProcessor.process();
		this.dataOperationBegun.waitingForResult = false;
	}


}
