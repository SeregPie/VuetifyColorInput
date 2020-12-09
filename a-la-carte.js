import VColorInput from './index';

import {
	VColorPicker,
	VInput,
	VLabel,
	VMenu,
} from 'vuetify/lib';

let {name} = VColorInput;

export default {
	name,
	components: {
		VColorPicker,
		VInput,
		VLabel,
		VMenu,
	},
	extends: VColorInput,
};
