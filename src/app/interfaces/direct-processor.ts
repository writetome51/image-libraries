import { Processor } from './processor';


export interface DirectProcessor extends Processor {
	process: (arg) => void;
}
