import { AppPaginatorService } from '@app-paginator/app-paginator.abstract.service';
import { Gettable } from '@interfaces/gettable.interface';
import { ValidatingJumpToPageNumberInputService }
	from '@validating-input/validating-jump-to-page-number-input.abstract.service';


export abstract class ImagesViewerContextDirective {

	abstract routeBeforePageNumber: string;
	abstract paginator: AppPaginatorService;
	abstract jumpToPageInput: ValidatingJumpToPageNumberInputService;
	protected abstract _storedImageTotal: Gettable<number>;


	get imageTotal(): number {
		return this._storedImageTotal.get();
	}

}
