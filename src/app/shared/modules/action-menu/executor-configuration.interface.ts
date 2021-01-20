import { IDoThis } from '@interfaces/i-do-this.interface';
import { HasLabel } from '@interfaces/has-label/has-label.interface';


export interface ExecutorConfiguration extends HasLabel {

	executor: IDoThis

}
