<template>
	<!-- {{ lists }} -->
	<ul class="section__lists">
		<section-list
			:lists="lists"
		/>
	</ul>
</template>

<script setup>
import SectionList from './SectionList.vue';
import { defineProps } from 'vue';

const props = defineProps({
	lists: Array,
});
</script>

<style lang="scss" scoped></style>
