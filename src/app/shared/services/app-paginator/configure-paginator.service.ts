import { AppPaginatorService } from './app-paginator.abstract.service';
import { IDoThis } from '@interfaces/i-do-this.interface';


export class __ConfigurePaginatorService {

	private static readonly __defaultItemsPerPage = 40;
	private static readonly __defaultItemsPerLoad = 120;


	static go(paginator: AppPaginatorService, itemsPerPage = this.__defaultItemsPerPage) {
		paginator.setItemsPerLoad(this.__defaultItemsPerLoad);

		paginator.setItemsPerPage(itemsPerPage);
		if (itemsPerPage > this.__defaultItemsPerPage) paginator.setItemsPerLoad(itemsPerPage);
	}

}

export const ConfigurePaginatorService: IDoThis = __ConfigurePaginatorService;
