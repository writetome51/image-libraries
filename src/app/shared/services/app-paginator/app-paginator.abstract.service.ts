import { AppPaginatorDataSourceService }
	from './app-paginator-data-source_service/app-paginator-data-source.abstract.service';
import { BigDatasetPaginator } from '@writetome51/big-dataset-paginator';
import { LoadData as load, PageData as page }
	from '@runtime-state-data/static-classes/auto-resettable.data';
import { noValue } from '@writetome51/has-value-no-value';


export abstract class AppPaginatorService extends BigDatasetPaginator {

	constructor(private __dataSource: AppPaginatorDataSourceService) {
		super(__dataSource);

		this.setItemsPerLoad(load.size);
		this.setItemsPerPage(page.size);
	}


	// Must be called if no pages have been fetched yet.

	async initialize(): Promise<void> {
		await this.__dataSource.set_dataTotal();
	}


	async resetToFirstPage(): Promise<void> {
		await this.initialize();

		// If dataTotal is 0, this triggers error in super.resetToFirstPage():
		await super.resetToFirstPage().catch(() => {}); // just keep running.
	}


	async setCurrentPageNumber(num): Promise<void> {
		if (noValue(this.__dataSource.dataTotal)) await this.initialize();

		// If dataTotal is 0, this triggers error in super.setCurrentPageNumber():
		await super.setCurrentPageNumber(num).catch(() => {}); // just keep running.
	}


	setItemsPerPage(num: number) {
		// This may cause itemsPerLoad to adjust so itemsPerLoad / itemsPerPage
		// remains evenly divisible:
		super.setItemsPerPage(num);
		page.size = this.getItemsPerPage();
		load.size = this.getItemsPerLoad(); // in case itemsPerLoad was adjusted.
	}


	setItemsPerLoad(num: number) {
		super.setItemsPerLoad(num);
		load.size = this.getItemsPerLoad();
	}

}
