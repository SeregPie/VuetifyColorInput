(function() {

	new Vue({
		el: '#App',
		vuetify: new Vuetify(),
		data: function() {
			return {
				disabled: false,
				drawer: true,
				hideDetails: false,
				noAlpha: false,
				persistentHint: false,
				value: chroma.random().hex(),
			};
		},
		computed: {
			dark: {
				get: function() {
					return this.$vuetify.theme.dark;
				},
				set: function(value) {
					this.$vuetify.theme.dark = value;
				},
			},
			rtl: {
				get: function() {
					return this.$vuetify.rtl;
				},
				set: function(value) {
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
		},
	});

})();
