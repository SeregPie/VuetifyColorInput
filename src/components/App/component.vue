<script setup lang="ts">
import {customRef} from 'vue';
import {computed, ref} from 'vue';
import {useI18n} from 'vue-i18n';
import {useRtl, useTheme} from 'vuetify';
import {VApp} from 'vuetify/components/VApp';
import {VAppBar, VAppBarNavIcon} from 'vuetify/components/VAppBar';
import {VBtn} from 'vuetify/components/VBtn';
import {VBtnToggle} from 'vuetify/components/VBtnToggle';
import {VBottomNavigation} from 'vuetify/components/VBottomNavigation';
import {VCard, VCardText} from 'vuetify/components/VCard';
import {VCheckbox} from 'vuetify/components/VCheckbox';
import {VDivider} from 'vuetify/components/VDivider';
import {VIcon} from 'vuetify/components/VIcon';
import {VItem, VItemGroup} from 'vuetify/components/VItemGroup';
import {VMain} from 'vuetify/components/VMain';
import {VNavigationDrawer} from 'vuetify/components/VNavigationDrawer';
import {VSheet} from 'vuetify/components/VSheet';

type Density = NonNullable<VCheckbox['$props']['density']>;

type ValidationRules = NonNullable<VCheckbox['$props']['rules']>;

const {t} = useI18n();

const theme = useTheme();

const dark = computed<boolean>({
	get: () => theme.global.current.value.dark,
	set: (v) => {
		theme.global.name.value = v ? 'dark' : 'light';
	},
});

const rtl = useRtl().isRtl;

const drawer = ref<boolean>(true);
const toggleDrawer = (): void => {
	drawer.value = !drawer.value;
};

const value = ref<any>(false);
const rules: ValidationRules = [(value) => value || 'Required.'];

const showLabel = ref<boolean>(true);
const label = computed<undefined | string>(() => {
	if (showLabel.value) {
		return t('awgsyeba');
	}
});

const showHint = ref<boolean>(true);
const hint = computed<undefined | string>(() => {
	if (showHint.value) {
		return t('rtjxexxj');
	}
});

const density = ref<Density>('default');

const disabled = ref<boolean>(false);
const readonly = ref<boolean>(false);
</script>
<template>
	<VApp>
		<VNavigationDrawer v-model="drawer">
			<div style="display: grid; gap: 1rem; padding: 1rem">
				<VItemGroup
					v-model="dark"
					mandatory
				>
					<div
						style="
							display: grid;
							gap: 1rem;
							grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
						"
					>
						<VItem
							v-for="{value, label, icon} in [
								{
									value: false,
									label: t('wxiwvwfk'),
									icon: 'mdi-white-balance-sunny',
								},
								{
									value: true,
									label: t('rqwzgskk'),
									icon: 'mdi-weather-night',
								},
							]"
							:value="value"
							v-slot="{isSelected, toggle}"
						>
							<VBtn
								class="px-4 justify-space-between"
								style="text-transform: none; justify-content: space-between"
								:append-icon="icon"
								:color="isSelected ? 'primary' : undefined"
								variant="flat"
								@click="toggle()"
								>{{ label }}</VBtn
							>
						</VItem>
					</div>
				</VItemGroup>
				<VBottomNavigation grow>
					<v-btn value="recent">
						<v-icon>mdi-history</v-icon>

						Recent
					</v-btn>

					<v-btn value="favorites">
						<v-icon>mdi-heart</v-icon>

						Favorites
					</v-btn>

					<v-btn value="nearby">
						<v-icon>mdi-map-marker</v-icon>

						Nearby
					</v-btn>
				</VBottomNavigation>
				<VDivider />
				<VCheckbox
					v-model="showLabel"
					style="--v-input-control-height: unset"
					hide-details
					:label="t('smqobpip')"
				/>
				<VCheckbox
					v-model="showHint"
					style="--v-input-control-height: unset"
					hide-details
					:label="t('qksuocjq')"
				/>
				<VDivider />
				<VCheckbox
					v-model="disabled"
					style="--v-input-control-height: unset"
					hide-details
					:label="t('xelxxgkr')"
				/>
				<VCheckbox
					v-model="readonly"
					style="--v-input-control-height: unset"
					hide-details
					:label="t('aaewkmis')"
				/>
			</div>
		</VNavigationDrawer>
		<VAppBar
			color="primary"
			title="VuetifyImageInput"
		>
			<template v-slot:prepend>
				<VAppBarNavIcon @click="toggleDrawer()" />
			</template>
			<template v-slot:append>
				<VBtn
					href="https://github.com/SeregPie/VuetifyColorInput"
					icon="mdi-github"
					target="_blank"
				/>
			</template>
		</VAppBar>
		<VMain>
			<div
				style="
					align-items: center;
					display: grid;
					grid-template-columns: minmax(auto, 16rem);
					height: 100%;
					justify-content: center;
					padding: 1rem;
					width: 100%;
				"
			>
				<VCard>
					<template v-slot:text>
						<VCheckbox
							v-model="value"
							:density="density"
							:disabled="disabled"
							hide-details="auto"
							:hint="hint"
							:label="label"
							persistent-hint
							:readonly="readonly"
							:rules="rules"
						/>
					</template>
				</VCard>
			</div>
		</VMain>
	</VApp>
</template>
