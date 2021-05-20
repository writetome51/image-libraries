import { AlertsService as alerts } from '@services/alerts.service';
import { ActiveProgressBarCountData as activeProgressBarCount }
	from '@runtime-state-data/active-progress-bar-count.data';


export class AppMessageCenterToBeVisibleService {

	static get true(): boolean {
		return (
			alerts.get().length > 0 ||
			activeProgressBarCount.data > 0
		);
	}

}
