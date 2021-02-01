import { ComponentLink } from '@interfaces/has-label/link/component-link.interface';
import { ModuleLink } from '@interfaces/has-label/link/module-link.interface';


export interface LinkedTemplateWithHeading {

	link: ComponentLink | ModuleLink;

	heading: string;

	[propName: string]: any;

}
