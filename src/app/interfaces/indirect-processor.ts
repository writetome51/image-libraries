import { Processor } from './processor';


export interface IndirectProcessor extends Processor {
	process: () => void;
}
