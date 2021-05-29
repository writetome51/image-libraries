import { Gettable } from '@interfaces/gettable.interface';
import { AppPaginatorService } from '@app-paginator/app-paginator.abstract.service';
import { JumpToPageInputService }
	from '@app-pagination-controls_module/jump-to-page-input.abstract.service';
import { ImageRecord } from '@interfaces/image-record.interface';
import { GetPageImagesService as getPageImages } from '@services/get-page-images.service';


export abstract class ImagesViewerContextDirective {

	abstract routeBeforePageNumber: string;
	abstract paginator: AppPaginatorService;
	abstract jumpToPageInput: JumpToPageInputService;


	get imageTotal(): number {
		return this.__storedImageTotal.get();
	}

	get images(): ImageRecord[] {
		return getPageImages.go(this.paginator);
	}


	constructor(private __storedImageTotal: Gettable<number>) {}

}
