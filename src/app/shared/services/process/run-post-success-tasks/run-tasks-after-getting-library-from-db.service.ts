import { IDoThis } from '@interfaces/i-do-this.interface';
import { LibraryRecord } from '@interfaces/library-record.interface';


export class __RunTasksAfterGettingLibraryFromDBService {

	static go(library: LibraryRecord) {
		// for security:
		delete library._id;
		delete library._user_id;
	}

}

export const RunTasksAfterGettingLibraryFromDBService: IDoThis =
	__RunTasksAfterGettingLibraryFromDBService;
