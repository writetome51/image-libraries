import { PaginatorService } from './paginator.service';
import { AllImagesPaginatorDataSourceService }
	from './paginator-data-source/all-images-paginator-data-source.service';


export class AllImagesPaginatorService extends PaginatorService {

	constructor(__dataSource: AllImagesPaginatorDataSourceService) {
		super(__dataSource);
	}

}
