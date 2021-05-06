import { IDoThis } from '@interfaces/i-do-this.interface';


export class __GetFormattedPageTitleService {

	static go(parts: string[]): string {
		let title = '';
		for (let i=0, length=parts.length; i < length; ++i) title += (parts[i] + ' | ');
		return title.slice(0, -3); // returns without the last ' | '
	}

}

export const GetFormattedPageTitleService: IDoThis = __GetFormattedPageTitleService;
