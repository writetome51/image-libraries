import { IDoThis } from '@interfaces/i-do-this.interface';
import { AppPaginatorService } from '@app-paginator/app-paginator.abstract.service';


export abstract class RunTasksAfterModifyingLoadedImagesService implements IDoThis {

	constructor(private __paginator: AppPaginatorService) {}


	async go() {
		await this.__refreshCurrentPageData();
	}


	private async __refreshCurrentPageData() {
		let pageNum = this.__paginator.getCurrentPageNumber();
		await this.__paginator.setCurrentPageNumber(pageNum, {reload: true});
	}

}
