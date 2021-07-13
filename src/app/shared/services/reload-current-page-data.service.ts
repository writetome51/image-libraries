import { IDoThis } from '@interfaces/i-do-this.interface';
import { AppPaginatorService } from '@app-paginator/app-paginator.abstract.service';
import { SetCurrentPageImagesService } from '@services/set-current-page-images.service';
import { Injectable } from '@angular/core';


@Injectable({providedIn: 'root'})
export class ReloadCurrentPageDataService implements IDoThis {

	constructor(private __setCurrentPageImages: SetCurrentPageImagesService) {}


	async go(paginator: AppPaginatorService) {
		let pageNum = paginator.getCurrentPageNumber();
		await this.__setCurrentPageImages.go(pageNum, paginator, {reload: true});
	}

}
