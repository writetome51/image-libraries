import { IDoThis } from '@interfaces/i-do-this.interface';
import { appName } from '@string-constants/app-name';


export class __GetPageTitleService {

	static go(parts: string[]): string {
		const defaultParts = [appName];
		parts = defaultParts.concat(parts);
		return parts.join(' | ');
	}

}

export const GetPageTitleService: IDoThis = __GetPageTitleService;
