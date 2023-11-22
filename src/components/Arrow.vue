<script setup>
import { ref, defineEmits } from 'vue';

const props = defineProps({
	isActiveList: Boolean,
	toggleList: Function,
});
</script>

<template>
	<svg
		:style="!isActiveList ? 'transform: rotate(-90deg)' : ''"
		class="arrow-icon"
		xmlns="http://www.w3.org/2000/svg"
		width="10"
		height="10"
		viewBox="0 0 10 9"
		fill="none"
		@click="toggleList"
	>
		<path
			d="M0 1.73798L0.874823 0.916584L4.98178 5.2907L4.10696 6.11209L0 1.73798Z"
			fill="black"
		/>
		<path
			d="M4.10696 6.11209L3.28557 5.23727L7.65968 1.13031L8.48107 2.00513L4.10696 6.11209Z"
			fill="black"
		/>
	</svg>
</template>
