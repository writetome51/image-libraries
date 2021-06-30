import { Gettable } from '@interfaces/gettable.interface';
import { AppPaginatorService } from '@app-paginator/app-paginator.abstract.service';
import { JumpToPageInputService } from '@app-pagination-controls_module/jump-to-page-input.abstract.service';
import { ImageRecord } from '@interfaces/image-record.interface';
import { CurrentPageImagesData, CurrentPageImagesData as currentPageImages }
	from '@runtime-state-data/static-classes/auto-resettable.data';
import { setArray } from '@writetome51/set-array';
import { Directive, OnInit } from '@angular/core';


export abstract class ImagesViewerContextDirective {

	abstract routeBeforePageNumber: string;
	abstract paginator: AppPaginatorService;
	abstract jumpToPageInput: JumpToPageInputService;
	__storedImageTotal: Gettable<number>;


	get imageTotal(): number {
		return this.__storedImageTotal.get();
	}

	get images(): ImageRecord[] {
		return CurrentPageImagesData.data;
	}

}
