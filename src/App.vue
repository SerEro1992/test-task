<script setup>
import AppHelp from './components/AppHelp.vue';
import AppLists from './components/AppLists.vue';

import SectionLists from './components/SectionLists.vue';
import { useUtils } from './composables/useUtils';

const { data } = useUtils();
const lists = data.value;
</script>

<template>
	<main class="container">
		<section class="section-left">
			<app-help />
			<app-lists :lists="lists" />
		</section>

		<section class="section-right">
			<section-lists :lists="lists" />
		</section>
	</main>
</template>

<style>
* {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
}
ul li {
	list-style: none;
}

.container {
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: space-between;
	gap: 25px;
	margin-top: 20px;
}

.section-left {
	width: 600px;
	padding: 20px;
	border: 1px solid lightgray;
}

.section-right {
	width: 600px;
	padding: 20px;
	border: 1px solid lightgray;
}
</style>
