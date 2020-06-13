import { AppPaginator } from '@writetome51/app-paginator';
import { AppPaginatorDataSourceService }
	from './app-paginator-data-source/app-paginator-data-source.service';
import { PageData as page } from '../../../data-structures/runtime-state-data/static-classes/page.data';
import { BatchData as batch }
	from '../../../data-structures/runtime-state-data/static-classes/batch.data';


export abstract class AppPaginatorService extends AppPaginator {


	constructor(private __dataSource: AppPaginatorDataSourceService) {
		super(__dataSource);

		this.itemsPerPage = page.size;
		this.__ensureTheyMatch(this.itemsPerBatch, batch.size);

	}


	async resetToFirstPage(): Promise<void> {
		// this.__dataSource.dataTotal must be set before fetching any pages.
		await this.__dataSource.set_dataTotal();

		// If the dataTotal is 0, this will trigger error in super.resetToFirstPage():
		await super.resetToFirstPage().catch(() => {}); // just keep running.
	}


	private __ensureTheyMatch(itemsPerBatch, batchSize) { // params are merely illustrative.

		// this.itemsPerBatch must be evenly divisible by this.itemsPerPage.
		// If it isn't, its value is lowered until it is.

		this.itemsPerBatch = batch.size; // this.itemsPerBatch is validated and possibly lowered.
		batch.size = this.itemsPerBatch; // Just in case itemsPerBatch got lowered.
	}

}
