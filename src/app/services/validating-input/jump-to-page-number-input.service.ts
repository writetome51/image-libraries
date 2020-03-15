import { ValidatingNumberInputService } from '@writetome51/validating-inputs';
import { PageNumberData as pageNumber }
	from '../../data-structures/runtime-state-data/page-number.data';
import { PaginatorService } from '../paginator/paginator.service';


export abstract class JumpToPageNumberInputService extends ValidatingNumberInputService {

	constructor(paginator: PaginatorService) {
		super();

		this.data.id = 'jump-to-page-number-input';
		this.data.objectToBind = pageNumber;
		this.data.propertyToBind = 'data';
		this.data.objectToMatch = paginator;
		this.data.propertyToMatch = 'totalPages';
		this.data.label = 'Jump To Page';
		this.data.isValid = () => {
			if (this.data.objectToBind[this.data.propertyToBind] < 1) {
				this.data.objectToBind[this.data.propertyToBind] = 1;
			}
			if (this.data.objectToBind[this.data.propertyToBind]
				> this.data.objectToMatch[this.data.propertyToMatch]) {

				this.data.objectToBind[this.data.propertyToBind] =
					this.data.objectToMatch[this.data.propertyToMatch];
			}
			return true;
		};
		this.data.hideLabel = false;
		this.data.min = 1;
	}

}
