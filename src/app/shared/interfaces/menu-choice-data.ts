import { AppImage } from './app-image';
import { AppActionMenuChoice } from './app-action-menu-choice';


export interface MenuChoiceData {
	choice: AppActionMenuChoice;
	parent: string;
	image?: AppImage; // in case the menu is used on a single image.
}
