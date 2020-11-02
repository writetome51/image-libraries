import { MenuChoice } from '@interfaces/menu-choice';


export class MenuChoiceLibraryData {

	static readonly enableZoomOnScrolling: MenuChoice = {label: 'Enable Zoom On Scrolling'};
	static readonly selectMultiple: MenuChoice = {label: 'Select Multiple Images'};
	static readonly addSelected: MenuChoice = {label: 'Add Selected to Library'};
	static readonly removeSelected: MenuChoice = {label: 'Remove Selected from Library'};
	static readonly deleteSelected: MenuChoice = {label: 'Delete Selected'};

}
