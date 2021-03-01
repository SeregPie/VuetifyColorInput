(() => {

	new Vue({
		el: '#App',
		vuetify: new Vuetify(),
		data() {
			let modeItems = [
				'hex',
				'rgb',
				'hsl',
			];
			return {
				disabled: false,
				drawer: true,
				hideCanvas: false,
				hideDetails: false,
				hideInputs: false,
				hideModeSwitch: false,
				hideSliders: false,
				mode: modeItems[0],
				modeItems,
				noAlpha: false,
				persistentHint: false,
				showSwatches: false,
				value: chroma.random().hex(),
			};
		},
		computed: {
			dark: {
				get() {
					return this.$vuetify.theme.dark;
				},
				set(value) {
					this.$vuetify.theme.dark = value;
				},
			},
			rtl: {
				get() {
					return this.$vuetify.rtl;
				},
				set(value) {
					this.$vuetify.rtl = value;
				},
			},
			rules() {
				return [
					v => {
						if (!v) {
							return 'The color is required.';
						}
						if (chroma(v).get('lab.l') > 80) {
							return 'The color is too light.';
						}
						if (chroma(v).get('lab.l') < 20) {
							return 'The color is too dark.';
						}
						return true;
					},
				];
			},
			valueFormatted() {
				return JSON.stringify(this.value)
			},
		},
	});

})();
