import isArray from './isArray';
import isEqual from './isEqual';
import isObject from './isObject';

function isDeepEqual(value, otherValue) {
	if (isEqual(value, otherValue)) {
		return true;
	}
	if (isArray(value)) {
		if (isArray(otherValue)) {
			let length = value.length;
			let otherLength = otherValue.length;
			if (length === otherLength) {
				for (let i = 0; i < length; i++) {
					if (!isDeepEqual(value[i], otherValue[i])) {
						return false;
					}
				}
				return true;
			}
		}
	} else
	if (isObject(value)) {
		if (isObject(otherValue)) {
			let keys = Object.keys(value).sort();
			let otherKeys = Object.keys(otherValue).sort();
			if (isDeepEqual(keys, otherKeys)) {
				value = keys.map(k => value[k]);
				otherValue = keys.map(k => otherValue[k]);
				if (isDeepEqual(value, otherValue)) {
					return true;
				}
			}
		}
	}
	return false;
}

export default isDeepEqual;
