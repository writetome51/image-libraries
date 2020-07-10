import { AppPaginatorDataSourceService }
	from './app-paginator-data-source/app-paginator-data-source.service';
import { BigDatasetPaginator } from '@writetome51/big-dataset-paginator';
import { LoadData as load }
	from '../../../data-structures/runtime-state-data/static-classes/load.data';
import { PageData as page } from '../../../data-structures/runtime-state-data/static-classes/page.data';


export abstract class AppPaginatorService extends BigDatasetPaginator {


	constructor(private __dataSource: AppPaginatorDataSourceService) {
		super(__dataSource);

		this.setItemsPerPage(page.size);
		this.__ensureTheyMatch( /* itemsPerLoad, load.size */ );
	}


	async resetToFirstPage(): Promise<void> {
		// this.__dataSource.dataTotal must be set before fetching any pages.
		await this.__dataSource.set_dataTotal();

		// If the dataTotal is 0, this will trigger error in super.resetToFirstPage():
		await super.resetToFirstPage().catch(() => {}); // just keep running.
	}


	private __ensureTheyMatch() {

		// itemsPerLoad must be evenly divisible by itemsPerPage.
		// If it isn't, its value is lowered until it is.

		this.setItemsPerLoad(load.size);
		load.size = this.getItemsPerLoad(); // Just in case it got lowered.
	}

}
