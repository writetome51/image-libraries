import { ComponentLink } from '@interfaces/component-link';


export interface LinkedSubcomponent {

	link: ComponentLink;

	[propName: string]: any;

}
