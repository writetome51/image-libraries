import { CheckableMenuChoiceData } // tslint:disable-next-line:max-line-length
	from '@action-menu/checkable-menu-choice-data.interface';
import { DataContainer }
	from '@interfaces/data-container.interface';


export interface TogglableMenuChoiceData extends CheckableMenuChoiceData {

	toggleSetting: DataContainer<{ enabled: boolean }>;

}
