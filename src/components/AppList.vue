<script setup>
import AppItem from './AppItem.vue';
import Arrow from './Arrow.vue';
import { useUtils } from '../composables/useUtils';
import { useSettingsStore } from '@/stores/settings.js';

import { ref, defineProps, watch, onMounted } from 'vue';

const props = defineProps({
	lists: Array,
	list: Array,
	index: Number,
});

const isActiveList = ref(false);
const toggleList = () => {
	isActiveList.value = !isActiveList.value;
};

const someActiveItem = ref(0);
const someItemActiveState = ref(false);
const allItemActive = ref(false);

const toggleSelectAll = () => {
	if (someItemActiveState.value) {
		return;
	} else {
		allItemActive.value = !allItemActive.value;
		props.list.forEach((item) => {
			item.visibility = allItemActive.value;
		});
	}
};

watch(props.list, () => {
	someActiveItem.value = props.list.filter((item) => item.visibility === true);
	if (someActiveItem.value.length === 0) {
		someItemActiveState.value = false;
		allItemActive.value = false;
	} else if (
		someActiveItem.value.length > 0 &&
		someActiveItem.value.length < props.list.length
	) {
		someItemActiveState.value = true;
		allItemActive.value = false;
	} else {
		someItemActiveState.value = false;
		allItemActive.value = true;
	}
});
</script>

<template>
	<li class="list">
		<div class="list__dropdown">
			<Arrow :isActiveList="isActiveList" :toggleList="toggleList" />

			<label :for="index" class="control__list">
				<input
					type="checkbox"
					name="list"
					:id="index"
					class="control__input"
					v-model="allItemActive"
				/>

				<span class="list__point" @click.prevent.stop="toggleSelectAll">
					<svg
						v-if="someItemActiveState"
						height="10"
						width="10"
						class="control__circle"
					>
						<circle cx="5" cy="5" r="4" fill="black" />
					</svg>

					<span class="list__checked" v-if="allItemActive">
						<img src="../assets/x.png" alt="" />
					</span>
				</span>

				<span class="list__name" @click.prevent="toggleList">
					List {{ `${index + 1}` }}</span
				>
			</label>
		</div>

		<ul v-show="isActiveList" class="list__items">
			<app-item
				v-for="(item, indexItem) in list"
				:key="indexItem"
				:item="item"
				:indexList="index"
				:indexItem="indexItem"
				:lists="lists"
				:list="list"
				:itemActive="item.visibility"
			/>
		</ul>
	</li>
</template>

<style scoped>
.list {
	/* display: flex;
	align-items: center;
	flex-direction: column; */
}
.list__dropdown {
	display: flex;
	align-items: center;
}

.arrow-icon {
	margin-right: 10px;
	cursor: pointer;
}
.control__list {
	display: block;
	padding-left: 10px;
	position: relative;
}

.list__point {
	position: absolute;
	top: 0;
	left: 0;
	width: 20px;
	height: 20px;
	border: 1.5px solid #242424;
}
.list__checked {
	position: absolute;
	top: -2.5px;
	left: 2.5px;
}
.list__checked img {
	width: 12px;
	height: 12px;
}

.control__input {
	visibility: hidden;
}
.control__circle {
	position: absolute;
	top: 4px;
	left: 4px;
}

.list__name {
	margin-left: 10px;
}

.list__items {
}
</style>
