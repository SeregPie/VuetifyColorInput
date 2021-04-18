import VColorInput from './index';

import {
	VCard,
	VColorPicker,
	VInput,
	VLabel,
	VMenu,
} from 'vuetify/lib';

let {name} = VColorInput;

export default {
	name,
	components: {
		VCard,
		VColorPicker,
		VInput,
		VLabel,
		VMenu,
	},
	extends: VColorInput,
};
