import { ValidatingNumberInputService } from '@writetome51/validating-inputs';
import { PageNumberData as pageNumber }
	from '../../data-structures/runtime-state-data/page-number.data';
import { PaginatorService } from '../paginator/paginator.service';


export abstract class JumpToPageNumberInputService extends ValidatingNumberInputService {

	constructor(protected _paginator: PaginatorService) {
		super();

		this.data.id = 'jump-to-page-number-input';
		this.data.objectToBind = pageNumber;
		this.data.propertyToBind = 'data';
		this.data.label = 'Jump To Page';
		this.data.isValid = () => {
			if (this.data.objectToBind[this.data.propertyToBind] < 1) {
				this.data.objectToBind[this.data.propertyToBind] = 1;
			}
			if (this.data.objectToBind[this.data.propertyToBind] > this._paginator.totalPages) {
				this.data.objectToBind[this.data.propertyToBind] = this._paginator.totalPages;
			}
			return true;
		};
		this.data.hideLabel = false;
		this.data.min = 1;
		this.data.maxLength = 3;
	}


	setMax(): void {
		try {
			this.data.max = this._paginator.totalPages;
		}
		catch (e) {
			throw new Error(
				`The paginator's "totalPages" property is still undefined.  You can't call setMax() yet`
			);
		}
	}

}
