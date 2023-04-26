import chroma from 'chroma-js';

export default class {
	static from(value) {
		let [r, g, b, a] = chroma(value).rgba();
		a = Number(a.toFixed(3));
		return new this(r, g, b, a);
	}
	constructor(r, g, b, a) {
		Object.assign(this, {r, g, b, a});
	}
	toObject(format, noAlpha) {
		let result = (() => {
			let {r, g, b, a} = this;
			switch (format) {
				case 'hsl': {
					let {h, s, l, a} = chroma({r, g, b, a}).hsl();
					return {h, s, l, a};
				}
				case 'hsv': {
					let {h, s, v, a} = chroma({r, g, b, a}).hsv();
					return {h, s, v, a};
				}
			}
			return {r, g, b, a};
		})();
		if (noAlpha) {
			delete result.a;
		}
		return result;
	}
	toString(format) {
		let {r, g, b, a} = this;
		switch (format) {
			case 'hex': {
				return chroma({r, g, b, a}).hex();
			}
			case 'rgb': {
				return chroma({r, g, b, a}).css();
			}
		}
		return ((a < 1)
			? chroma({r, g, b, a}).css()
			: chroma({r, g, b, a}).hex()
		);
	}
}
