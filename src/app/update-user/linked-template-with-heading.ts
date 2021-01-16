import { ComponentLink } from '@interfaces/link/component-link';


export interface LinkedTemplateWithHeading {

	link: ComponentLink;

	heading: string;

	[propName: string]: any;

}
