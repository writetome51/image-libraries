import { AllImagesPaginatorDataSourceService }
	from './all-images-paginator-data-source/all-images-paginator-data-source.service';
import { AppPaginatorService } from '@services/app-paginator/app-paginator.service';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class AllImagesPaginatorService extends AppPaginatorService {

	constructor(__dataSource: AllImagesPaginatorDataSourceService) {
		super(__dataSource);
	}

}
