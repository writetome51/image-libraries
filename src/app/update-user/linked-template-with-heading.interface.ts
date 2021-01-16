import { ComponentLink } from '@interfaces/link/component-link.interface';


export interface LinkedTemplateWithHeading {

	link: ComponentLink;

	heading: string;

	[propName: string]: any;

}
