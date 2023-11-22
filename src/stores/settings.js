import { defineStore } from 'pinia';
import { useUtils } from '../composables/useUtils';

export const useSettingsStore = defineStore('myStore', {
	state: () => ({
		data: [],
		mix: [  ],
	}),

	actions: {

	},
});
