import { AppPaginatorService } from '@app-paginator/app-paginator.abstract.service';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { noValue } from '@writetome51/has-value-no-value';


export class __ConfigurePaginatorService {

	private static readonly __defaultItemsPerPage = 40;
	private static readonly __defaultItemsPerLoad = 80;


	static go(paginator: AppPaginatorService, itemsPerPage = this.__defaultItemsPerPage) {
		if (noValue(paginator.getItemsPerLoad())) {
			paginator.setItemsPerLoad(this.__defaultItemsPerLoad);
		}

		// Because itemsPerPage can't be greater than itemsPerLoad, if `value` is greater than
		// itemsPerLoad, the itemsPerLoad must be assigned `value` first.

		if (itemsPerPage > paginator.getItemsPerLoad()) paginator.setItemsPerLoad(itemsPerPage);
		paginator.setItemsPerPage(itemsPerPage);

		paginator.setItemsPerLoad(
			itemsPerPage > this.__defaultItemsPerPage ? itemsPerPage : itemsPerPage * 2
		);
	}

}

export const ConfigurePaginatorService: IDoThis = __ConfigurePaginatorService;
