<script setup>
import SingleSquare from './SingleSquare.vue';

import { inject, ref, defineProps, watch, onMounted, defineEmits } from 'vue';

const props = defineProps({
	lists: Array,
	list: Array,
	index: Number,
});

const arrayList = ref([]);

function handleArrayItems(item) {
	console.log(item)

	// arrayList.value = arrayList.value.concat(arrayItems);

	// arrayItems[i]
	// arrayList.value = arrayList.value.concat(arrayItems);
}

function shuffle(array) {
	for (let i = array.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
}
</script>

<template>
	<li class="section__list" v-for="(list, index) in props.lists" :key="index">
		<!-- {{ arrayList }}{{ arrayList }} -->
		<div class="section__header">
			<h3 class="section__title">List {{ `${index + 1}` }}</h3>
			<div class="">
				<button type="button" @click="shuffle(list)" class="btn">
					Перемешать
				</button>
				<!-- <button type="button" class="btn">Сортировать</button> -->
			</div>
		</div>

		<div class="square__container">
			<single-square
				v-for="(item, indexItem) in list"
				:key="indexItem"
				:item="item"
				:indexList="index"
				:indexItem="indexItem"
				:lists="props.lists"
				:list="props.list"
				@item="handleArrayItems"
			/>
		</div>
	</li>
</template>

<style scoped>
.section__list {
}

.section__list {
	padding: 10px;
	border: 1px solid lightgray;
	border-radius: 10px;
	margin-bottom: 20px;
}
.square__container {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-items: center;
	margin-bottom: 5px;
}

.section__header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 10px;
}

.btn {
	background-color: rgb(1, 47, 250);
	color: white;
	border: none;
	border-radius: 5px;
	padding: 3px 5px;
}
.btn:hover {
	background-color: rgba(4, 28, 138);
}
</style>
