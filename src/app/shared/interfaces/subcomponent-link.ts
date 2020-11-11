import { Link } from '@interfaces/link';


export interface SubcomponentLink extends Link {

	component: Function; // class constructor

	heading?: string;

}
