import { Link } from '@interfaces/link';
import { Type } from '@angular/core';


export interface ComponentLink extends Link {

	component: Type<any>;

}
