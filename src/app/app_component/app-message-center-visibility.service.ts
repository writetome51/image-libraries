import { AlertsService as alerts } from '@services/alerts.service';
import { DeletingFilesProgressData as deletingFilesProgress }
	from '@runtime-state-data/deleting-files-progress.data';
import { UploadingFilesProgressData as uploadingFilesProgress }
	from '@runtime-state-data/uploading-files-progress.data';


export class AppMessageCenterVisibilityService {

	static get visible(): boolean {
		return (
			// Keep each criterion on separate line:
			alerts.get().length > 0 ||
			deletingFilesProgress.percentageComplete > 0 ||
			uploadingFilesProgress.percentageComplete > 0
		);
	}


	static hide() {
		// Keep each criterion on separate line:
		alerts.clearAll();
		deletingFilesProgress.percentageComplete = 0;
		uploadingFilesProgress.percentageComplete = 0;
	}

}
