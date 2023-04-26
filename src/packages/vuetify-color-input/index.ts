import {defineComponent, h, PropType} from 'vue';
import {VInput} from 'vuetify/components/VInput';

VInput.filterProps

const VColorInput = defineComponent({
	name: 'VColorInput',

	inheritAttrs: false,

	props: {
		appendIcon: {
			type: String,
			default: '$cancel',
		},
		clearable: Boolean,
		clearIcon: {
			type: String,
			default: '$clear',
		},
		disabled: Boolean,
		errorIcon: {
			type: String,
			default: '$error',
		},
		flipHorizontallyIcon: {
			type: String,
			default: 'mdi-flip-horizontal',
		},
		flipVerticallyIcon: {
			type: String,
			default: 'mdi-flip-vertical',
		},
		hideDetails: [Boolean, String] as PropType<boolean | 'auto'>,
		id: String,
		imageBackgroundColor: String,
		imageHeight: {
			type: Number,
			default: 256,
		},
		imageMaxHeight: {
			type: Number,
			default: 512,
		},
		imageMaxWidth: {
			type: Number,
			default: 512,
		},
		imageMinHeight: {
			type: Number,
			default: 128,
		},
		imageMinWidth: {
			type: Number,
			default: 128,
		},
		imageWidth: {
			type: Number,
			default: 256,
		},
		label: String,
		messages: {
			type: [String, Array] as PropType<string | Array<string>>,
			default: () => [],
		},
		modelValue: {}, // todo?
		name: String,
		readonly: Boolean,
		resetable: Boolean,
		resetIcon: {
			type: String,
			default: 'mdi-restore',
		},
		rotateClockwiseIcon: {
			type: String,
			default: 'mdi-rotate-right',
		},
		rotateCounterClockwiseIcon: {
			type: String,
			default: 'mdi-rotate-left',
		},
		successIcon: {
			type: String,
			default: '$success',
		},
		uploadIcon: {
			type: String,
			default: 'mdi-upload',
		},
		zoomInIcon: {
			type: String,
			default: 'mdi-magnify-plus-outline',
		},
		zoomOutIcon: {
			type: String,
			default: 'mdi-magnify-minus-outline',
		},
	},

	//emits: {},

	setup(props, { attrs, slots }) {

		return () => {
			const [inputProps, _1] = VInput.filterProps(props);
			return h(VInput);
		};
	},
});

VInput['$props'].

export default VColorInput;
