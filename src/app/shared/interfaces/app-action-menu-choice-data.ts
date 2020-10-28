import { AppImage } from './app-image';
import { ActionMenuChoice } from './action-menu-choice';


export interface AppActionMenuChoiceData {
	choice: ActionMenuChoice;
	image?: AppImage; // in case the menu is used on a single image.
}
