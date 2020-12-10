import { ComponentLink } from '@interfaces/component-link';


export interface LinkedTemplateWithHeading {

	link: ComponentLink;

	heading: string;

	[propName: string]: any;

}
