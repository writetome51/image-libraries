import { AppPaginator } from '@writetome51/app-paginator';
import { PaginatorDataSourceService } from './paginator-data-source/paginator-data-source.service';
import { PageData as page } from '../../../data-structures/runtime-state-data/static-classes/page.data';
import { BatchData as batch }
	from '../../../data-structures/runtime-state-data/static-classes/batch.data';


export abstract class PaginatorService extends AppPaginator {


	constructor(private __dataSource: PaginatorDataSourceService) {
		super(__dataSource);

		// itemsPerBatch / itemsPerPage must be evenly divisible.
		this.itemsPerPage = page.size;
		this.itemsPerBatch = batch.size; // itemsPerBatch gets validated and possibly changed.
		batch.size = this.itemsPerBatch; // just in case itemsPerBatch got changed.
	}


	async reset() {
		await this.__dataSource.setInitial_dataTotal();

		// If the dataTotal is 0, this will always trigger error in AppPaginator.reset():
		await super.reset().catch((e) => {}); // just keep running.
	}

}
