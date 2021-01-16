import { Processor } from './processor.interface';


export interface DirectProcessor extends Processor {

	process: (arg: any) => void;

}
