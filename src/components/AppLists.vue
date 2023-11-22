<template>
	<ul class="Lists">

		<app-list
			v-for="(list, index) in lists"
			:key="index"
			:index="index"
			:list="list"
			:lists="lists"
		/>
	</ul>
</template>

<script setup>
import AppList from './AppList.vue';
import { useSettingsStore } from '@/stores/settings.js';
import { defineProps } from 'vue';

const props = defineProps({
	lists: Array,
});

const store = useSettingsStore();
</script>

<style scoped></style>
