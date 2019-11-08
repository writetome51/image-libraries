export function getClassModificationDecorator(
	modifyInstance: (instance, decoratorArgs: any[]) => void
) {
	return function(...decoratorArgs) {
		return function(target: Function) {
			// save a reference to the original constructor
			const original = target;

			// the new constructor behaviour
			const f: any = function(...args) {
				let instance = construct(original, args);
				modifyInstance(instance, decoratorArgs);
				// return instance;
			};

			// copy prototype so `instanceof` operator still works
			f.prototype = original.prototype;

			// return new constructor (will override original)
			return f;


			// a utility function to generate instances of a class
			function construct(constructor, args) {
				const c: any = function() {
					return constructor.apply(this, args);
				};
				c.prototype = constructor.prototype;
				return new c();
			}

		};
	};
}
