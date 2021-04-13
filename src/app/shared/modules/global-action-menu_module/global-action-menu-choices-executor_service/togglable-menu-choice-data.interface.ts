import { CheckableMenuChoiceData }
	from '@action-menu_module/checkable-menu-choice-data.interface';
import { DataContainer } from '@interfaces/data-container.interface';


export interface TogglableMenuChoiceData extends CheckableMenuChoiceData {

	toggleSetting: DataContainer<{ enabled: boolean }>;

}
