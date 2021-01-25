import Color from '../utils/Color';
import isDeepEqual from '../utils/isDeepEqual';

export default {
	name: 'VColorInput',
	props: {
		appendIcon: String,
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
		internalValue: {
			get() {
				return this.getValue(this.format, this.mandatory);
			},
			set(value) {
				this.lazyValue = value;
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
			disabled,
			error,
			errorCount,
			errorMessages,
			hideDetails,
			hint,
			id,
			internalValue: value,
			menuActive,
			messages,
			persistentHint,
			prependIcon,
			rules,
			success,
			successMessages,
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
					...(keys => {
						let result = {};
						keys.forEach(key => {
							result[key] = ((...args) => {
								this.$emit(key, ...args);
							});
						});
						return result;
					})([
						'click:append',
						'click:prepend',
						'update:error',
					]),
				},
				scopedSlots: {
					...((object, keys) => {
						let result = {};
						keys.forEach(key => {
							let value = object[key];
							if (value !== undefined) {
								result[key] = value;
							}
						});
						return result;
					})($scopedSlots, [
						'append',
						'message',
						'prepend',
					]),
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
											alignItems: 'center',
											display: 'grid',
											gap: '8px',
											gridTemplateColumns: 'auto 1fr',
											pointerEvents: 'none',
											userSelect: 'none',
										},
									},
									[
										/*...(() => {
											if (disabled) {
												return [h()]
											}
											if (value) {
												return [h()]
											}
											return [h()]
										})(),*/
										h(
											'div',
											{
												style: {
													background: 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGElEQVQYlWNgYGCQwoKxgqGgcJA5h3yFAAs8BRWVSwooAAAAAElFTkSuQmCC) repeat',
													borderRadius: '50%',
													height: '24px',
													overflow: 'hidden',
													width: '24px',
												},
											},
											(this.valueAsString
												? [h(
													'div',
													{
														style: {
															background: this.valueAsString,
															height: '100%',
															width: '100%',
														},
													},
												)]
												: []
											),
										),
										...(() => {
											let $node;
											let $slot = $scopedSlots['label'];
											if ($slot) {
												$node = $slot();
											} else {
												let {label} = this;
												if (label) {
													$node = label;
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
													$node,
												)],
											)];
										})(),
									],
								)],
							);
						}),
						default: (() => {
							return h(
								'VColorPicker',
								{
									props: {
										disabled,
										hideInputs: true,
										value: valueForColorPicker,
									},
									on: {
										input: (value => {
											this.internalValue = value;
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
