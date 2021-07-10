import { AppPaginatorService } from '@app-paginator/app-paginator.abstract.service';
import { Gettable } from '@interfaces/gettable.interface';
import { JumpToPageInputService }
	from '@validating-input/jump-to-page-input.abstract.service';


export abstract class ImagesViewerContextDirective {

	abstract routeBeforePageNumber: string;
	abstract paginator: AppPaginatorService;
	abstract jumpToPageInput: JumpToPageInputService;
	protected abstract _storedImageTotal: Gettable<number>;


	get imageTotal(): number {
		return this._storedImageTotal.get();
	}

}
