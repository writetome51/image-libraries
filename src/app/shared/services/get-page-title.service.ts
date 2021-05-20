import { IDoThis } from '@interfaces/i-do-this.interface';
import { appName } from '@string-constants/app-name';
import { CurrentPageTitleData as currentPageTitle }
	from '@runtime-state-data/static-classes/auto-resettable.data';


export class __GetPageTitleService {

	static go(parts: string[]): string {
		const defaultParts = [appName];

		parts = defaultParts.concat(parts);
		currentPageTitle.data = parts.join(' | ');
		return currentPageTitle.data;
	}

}

export const GetPageTitleService: IDoThis = __GetPageTitleService;
