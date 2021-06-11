import { AllImagesPaginatorDataSourceService }
	from './all-images-paginator-data-source_service/all-images-paginator-data-source.service';
import { AppPaginatorService } from '@app-paginator/app-paginator.abstract.service';
import { Injectable } from '@angular/core';


@Injectable({providedIn: 'root'})
export class AllImagesPaginatorService extends AppPaginatorService {

	constructor(__dataSource: AllImagesPaginatorDataSourceService) {
		super(__dataSource);
	}

}
