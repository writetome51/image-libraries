import { Link } from './link.interface';
import { Type } from '@angular/core';


export interface ModuleLink extends Link {

	module: Type<any>;

}
