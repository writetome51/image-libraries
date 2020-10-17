import { UsesHovering } from '@interfaces/uses-hovering';


export interface Hoverable extends UsesHovering {

	hover(): void;

	unhover(): void;

}
