// import { IDoThis } from '@interfaces/i-do-this.interface';


export class RemoveBrowserStorageService { // implements IDoThis

	static go() {
		localStorage.clear();
		sessionStorage.clear();
	}

}
