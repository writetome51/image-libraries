import { AppImage } from './app-image';
import { AppActionMenuChoice } from './app-action-menu-choice';


export interface MenuChoiceData {
	choice: AppActionMenuChoice;
	image?: AppImage; // in case the menu is used on a single image.
}
