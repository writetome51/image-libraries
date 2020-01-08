import { DataContainer } from './data-container';


export interface SettableDataContainer extends DataContainer {

	set_data: () => void;

	unset_data: () => void;

}
