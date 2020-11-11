// Represents any class or object whose name clearly says what it does, hence it doesn't
// need descriptive method names, and needs only one public method.

export interface IDoThis {
	go: (...args) => any;
}
