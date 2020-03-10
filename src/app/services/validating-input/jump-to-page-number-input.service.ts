import { ValidatingNumberInputService } from '@writetome51/validating-inputs';
import { PageNumberData as pageNumber} from '../../data-structures/runtime-state-data/page-number.data';


export abstract class JumpToPageNumberInputService extends ValidatingNumberInputService {

	constructor() {
		super();

		this.data.id = 'jump-to-page-number-input';
		this.data.objectToBind = pageNumber;
		this.data.propertyToBind = 'data';
		this.data.label = 'Jump To Page';
		this.data.isValid = () => (
			this.data.objectToBind[this.data.propertyToBind]
			<= this.data.objectToMatch[this.data.propertyToMatch]
		);
		this.data.errorMessage =
			`Must be number from 1 to ${this.data.objectToMatch[this.data.propertyToMatch]}`;
		this.data.hideLabel = false;
		this.data.min = 1;
		this.data.max = this.data.objectToMatch[this.data.propertyToMatch];
	}

}
