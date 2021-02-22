import { Link } from '@interfaces/link.interface';
import { Type } from '@angular/core';


export interface ComponentLink extends Link {

	component: Type<any>;

}
