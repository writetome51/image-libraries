import { ComponentLink } from '@interfaces/component-link';


export interface VariableSubcomponent {

	link: ComponentLink;

	[propName: string]: any;

}
