import { IDoThis } from '@interfaces/i-do-this.interface';


export class __RemoveBrowserStorageService {

	static go() {
		localStorage.clear();
		sessionStorage.clear();
	}

}

export const RemoveBrowserStorageService: IDoThis = __RemoveBrowserStorageService;
