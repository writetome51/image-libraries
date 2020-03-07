import { AppPaginator } from '@writetome51/app-paginator';
import { PaginatorDataSourceService } from './paginator-data-source/paginator-data-source.service';
import { BatchData as batch } from '../../data/runtime-state-data/static-classes/batch.data';


export abstract class PaginatorService extends AppPaginator {

	constructor(private __dataSource: PaginatorDataSourceService) {
		super(__dataSource);

		this.itemsPerPage = batch.size;
		this.itemsPerBatch = batch.size;
	}


	async reset() {
		await this.__dataSource.setInitial_dataTotal();

		// If the dataTotal is 0, this will always trigger error in AppPaginator.reset():
		await super.reset().catch((e) => {
			// just keep running.
		});
	}

}
