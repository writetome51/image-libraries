export abstract class SettableDataContainerService {

	protected _data: any;


	abstract set_data(): void


	unset_data(): void {
		this._data = undefined;
	}

}
