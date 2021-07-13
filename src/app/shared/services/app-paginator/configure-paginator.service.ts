import { AppPaginatorService } from './app-paginator.abstract.service';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { DefaultPageSizeData as defaultPageSize } from '@read-only-data/default-page-size.data';


export class __ConfigurePaginatorService {

	static go(paginator: AppPaginatorService, itemsPerPage = defaultPageSize.data) {
		paginator.setItemsPerLoad(defaultPageSize.data * 3);

		paginator.setItemsPerPage(itemsPerPage);
		if (itemsPerPage > defaultPageSize.data) paginator.setItemsPerLoad(itemsPerPage);
	}

}

export const ConfigurePaginatorService: IDoThis = __ConfigurePaginatorService;
