import { AppPaginator } from '@writetome51/app-paginator';
import { PaginatorDataSourceService } from './paginator-data-source/paginator-data-source.service';
import { PageData as page } from '../../../data-structures/runtime-state-data/static-classes/page.data';
import { BatchData as batch }
	from '../../../data-structures/runtime-state-data/static-classes/batch.data';


export abstract class PaginatorService extends AppPaginator {


	constructor(private __dataSource: PaginatorDataSourceService) {
		super(__dataSource);

		this.itemsPerPage = page.size;

		// itemsPerBatch must be evenly divisible by itemsPerPage.
		// If it isn't, its value is lowered until it is.

		this.itemsPerBatch = batch.size; // itemsPerBatch gets validated and possibly changed.
		batch.size = this.itemsPerBatch; // Just in case itemsPerBatch got changed.
	}


	async resetToFirstPage() {
		await this.__dataSource.set_dataTotal();

		// If the dataTotal is 0, this will trigger error in super.resetToFirstPage():
		await super.resetToFirstPage().catch((e) => {}); // just keep running.
	}

}
