import BackgroundCheckered from '../styles/BackgroundCheckered';
import BackgroundColor from '../styles/BackgroundColor';
import FlexCenter from '../styles/FlexCenter';
import OverflowHidden from '../styles/OverflowHidden';
import PointerEventsNone from '../styles/PointerEventsNone';
import RoundedFull from '../styles/RoundedFull';
import Size from '../styles/Size';
import SizeFull from '../styles/SizeFull';
import Transition from '../styles/Transition';
import UserSelectNone from '../styles/UserSelectNone';
import Color from '../utils/Color';
import isDeepEqual from '../utils/isDeepEqual';

export default {
	name: 'VColorInput',
	inject: {
		theme: {
			default: {
				isDark: false,
			},
		},
	},
	props: {
		appendIcon: String,
		canvasHeight: {type: [String, Number]},
		disabled: Boolean,
		error: Boolean,
		errorCount: {},
		errorMessages: {},
		hideDetails: [Boolean, String],
		hint: {},
		id: {},
		label: String,
		messages: {},
		noAlpha: Boolean,
		persistentHint: Boolean,
		prependIcon: {},
		rules: {},
		success: Boolean,
		successMessages: {},
		validateOnBlur: Boolean,
		value: {},
		dotSize: {type: [Number, String]},
		hideCanvas: Boolean,
		hideInputs: Boolean,
		hideModeSwitch: Boolean,
		hideSliders: Boolean,
		mode: {
			type: String,
			default: 'hex',
		},
		showSwatches: Boolean,
		swatches: Array,
		swatchesMaxHeight: {type: [Number, String]},
	},
	data() {
		let {value} = this;
		return {
			fallbackValue: {r: 0, g: 0, b: 0, a: 0},
			format: 'string',
			lazyValue: value,
			mandatory: false,
			menuActive: false,
			validationState: undefined,
		};
	},
	computed: {
		dark() {
			return this.theme.isDark;
		},
		internalValue: {
			get() {
				return this.getValue(this.format, this.mandatory);
			},
			set(value) {
				this.lazyValue = value;
			},
		},
		modeForColorPicker: {
			get() {
				let value = this.mode;
				switch (value) {
					case 'hex': {
						return 'hexa';
					}
					case 'hsl': {
						return 'hsla';
					}
					case 'rgb': {
						return 'rgba';
					}
				}
				return value;
			},
			set(value) {
				value = (() => {
					switch (value) {
						case 'hexa': {
							return 'hex';
						}
						case 'hsla': {
							return 'hsl';
						}
						case 'rgba': {
							return 'rgb';
						}
					}
					return value;
				})();
				this.$emit('update:mode', value);
			},
		},
		valueAsString() {
			return this.getValue('string', true);
		},
		valueForColorPicker() {
			return this.getValue('object.rgb', true);
		},
	},
	watch: {
		internalValue: {
			handler(value, oldValue) {
				if (!isDeepEqual(value, oldValue)) {
					this.$emit('input', value);
				}
			},
			immediate: true,
		},
		value(value) {
			this.lazyValue = value;
		},
	},
	mounted() {
		this.$watch(
			() => this.$refs['input'].validationState,
			value => {
				this.validationState = value;
			},
			{immediate: true},
		);
	},
	methods: {
		getValue(format, mandatory) {
			let {lazyValue: value} = this;
			if (!value) {
				if (!mandatory) {
					return null;
				}
				({fallbackValue: value} = this);
			}
			let instance = Color.from(value);
			let {noAlpha} = this;
			if (noAlpha) {
				instance.a = 1;
			}
			switch (format) {
				case 'object.hsl': {
					return instance.toObject('hsl', noAlpha);
				}
				case 'object.hsv': {
					return instance.toObject('hsv', noAlpha);
				}
				case 'object.rgb': {
					return instance.toObject('rgb', noAlpha);
				}
				case 'string.hex': {
					return instance.toString('rgb');
				}
				case 'string.rgb': {
					return instance.toString('hex');
				}
			}
			return instance.toString();
		},
	},
	render(h) {
		let {
			$scopedSlots,
			appendIcon,
			canvasHeight,
			dark,
			disabled,
			dotSize,
			error,
			errorCount,
			errorMessages,
			hideCanvas,
			hideDetails,
			hideInputs,
			hideModeSwitch,
			hideSliders,
			hint,
			id,
			internalValue: value,
			menuActive,
			messages,
			modeForColorPicker,
			persistentHint,
			prependIcon,
			rules,
			showSwatches,
			success,
			successMessages,
			swatches,
			swatchesMaxHeight,
			validateOnBlur,
			valueForColorPicker,
		} = this;
		return h(
			'VInput',
			{
				props: {
					appendIcon,
					disabled,
					error,
					errorCount,
					errorMessages,
					hideDetails,
					hint,
					id,
					messages,
					persistentHint,
					prependIcon,
					rules,
					success,
					successMessages,
					validateOnBlur,
					value,
				},
				on: {
					'click:append': ((...args) => {
						this.$emit('click:append', ...args);
					}),
					'click:prepend': ((...args) => {
						this.$emit('click:prepend', ...args);
					}),
					'update:error': ((...args) => {
						this.$emit('update:error', ...args);
					}),
				},
				scopedSlots: {
					'append': $scopedSlots['append'],
					'message': $scopedSlots['message'],
					'prepend': $scopedSlots['prepend'],
				},
				ref: 'input',
			},
			[h(
				'VMenu',
				{
					ref: 'menu',
					props: {
						closeOnContentClick: false,
						disabled,
						offsetY: true,
						value: menuActive,
					},
					on: {
						'input': (value => {
							this.menuActive = value;
						}),
					},
					scopedSlots: {
						'activator': (({
							attrs,
							on,
						}) => {
							return h(
								'div',
								{
									attrs,
									on,
								},
								[h(
									'div',
									{
										style: {
											...PointerEventsNone,
											...UserSelectNone,
											alignItems: 'center',
											display: 'grid',
											gap: '8px',
											gridTemplateColumns: 'auto 1fr',
										},
									},
									[
										h(
											'div',
											{
												style: {
													...(() => {
														if (disabled) {
															return {};
														}
														if (value) {
															return {
																...(dark
																	? BackgroundCheckered(8, '#fff', '#000')
																	: BackgroundCheckered(8, '#f00', '#0f0')
																),
															};
														}
														return {};
													})(),
													...RoundedFull,
													...OverflowHidden,
													...Size('24px'),
													...Transition,
													...FlexCenter,
												},
											},
											[h(
												'div',
												{
													style: {
														...(() => {
															if (disabled) {
																return {
																	...RoundedFull,
																	...Size('8px'),
																	...(dark
																		? BackgroundColor('hsla(0,0%,100%,.2)')
																		: BackgroundColor('rgba(0,0,0,.26)')
																	),
																};
															}
															if (value) {
																return {
																	...SizeFull,
																	...BackgroundColor(this.valueAsString),
																};
															}
															return {};
														})(),
														...Transition,
													},
												},
											)]
										),
										...(() => {
											let content;
											let slot = $scopedSlots['label'];
											if (slot) {
												content = slot();
											} else {
												let {label} = this;
												if (label) {
													content = label;
												} else {
													return [];
												}
											}
											let {validationState} = this;
											return [h(
												'div',
												[h(
													'VLabel',
													{
														props: {
															color: validationState,
															disabled,
															focused: !!validationState,
														},
													},
													content,
												)],
											)];
										})(),
									],
								)],
							);
						}),
						'default': (() => {
							return h(
								'VColorPicker',
								{
									props: {
										canvasHeight,
										disabled,
										dotSize,
										hideCanvas,
										hideInputs,
										hideModeSwitch,
										hideSliders,
										mode: modeForColorPicker,
										showSwatches,
										swatches,
										swatchesMaxHeight,
										value: valueForColorPicker,
									},
									on: {
										'input': (value => {
											this.internalValue = value;
										}),
										'update:mode': (value => {
											this.modeForColorPicker = value;
										}),
									},
								},
							);
						}),
					},
				},
			)],
		);
	},
};
