import { IDoThis } from '@interfaces/i-do-this.interface';
import { Injectable } from '@angular/core';
import { GetCurrentPaginatorService } from './get-current-paginator.service';
import { ReloadCurrentPageDataService as reloadCurrentPageData }
	from '@services/reload-current-page-data.service';


@Injectable({providedIn: 'root'})
export class ReloadCurrentPageDataWithCurrentPaginatorService implements IDoThis {

	constructor(private __getCurrentPaginator: GetCurrentPaginatorService) {}


	async go() {
		const paginator = this.__getCurrentPaginator.go();
		await reloadCurrentPageData.go(paginator);
	}

}
