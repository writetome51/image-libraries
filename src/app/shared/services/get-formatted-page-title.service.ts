import { IDoThis } from '@interfaces/i-do-this.interface';


export class __GetFormattedPageTitleService {
	static go(parts: string[]): string { return parts.join(' | '); }
}
export const GetFormattedPageTitleService: IDoThis = __GetFormattedPageTitleService;
