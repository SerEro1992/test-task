<script setup>
import { ref, defineProps, reactive, watch, defineEmits } from 'vue';
import { useUtils } from '../composables/useUtils';

const { getRandomInt } = useUtils();

const props = defineProps({
	lists: Array,
	list: Array,
	item: Object,
	indexList: Number,
	indexItem: Number,
	itemActive: Boolean,
});

const emit = defineEmits(['item']);

const arrayItems = ref([]);

// function getArray() {
// 	arrayItems.value = [];
// 	for (
// 		let i = 0;
// 		i < props.lists[props.indexList][props.indexItem].quantity;
// 		i++
// 	) {
// 		let itemsObject = reactive({
// 			id: getRandomInt(0, 100000000000000),
// 			color: props.lists[props.indexList][props.indexItem].color,
// 			list: `${props.indexList + 1}`,
// 		});
// 		arrayItems.value.push(itemsObject);
// 	}

// 	return arrayItems.value;
// }

watch(
	props.lists[props.indexList][props.indexItem].visibility,
	(newVisibility) => {
		if (newVisibility) {
			arrayItems.value = [];
			for (
				let i = 0;
				i < props.lists[props.indexList][props.indexItem].quantity;
				i++
			) {
				let itemsObject = reactive({
					...props.item,
					idFig: getRandomInt(0, 100000000000000),
					index: props.indexList[props.indexList]
				});
				arrayItems.value.push(itemsObject);
			}
		}
	}
);

// watch(
// 	props.lists[props.indexList][props.indexItem].visibility,
// 	(newVisibility) => {
// 		if (newVisibility ) {

// 			arrayItems.value = [];
// 			for (
// 				let i = 0;
// 				i < props.lists[props.indexList][props.indexItem].quantity;
// 				i++
// 			) {
// 				let itemsObject = reactive({
// 					...props.item,
// 					idFig: getRandomInt(0, 100000000000000),
// 					index: props.indexList[props.indexList],
// 				});
// 				arrayItems.value.push(itemsObject);
// 			}
// 		}
// 	}
// );
</script>

<template>
	{{ }}
	<span
		v-if="lists[indexList][indexItem].visibility"
		v-for="item in lists[indexList][indexItem].quantity"
		:key="item.id"
		:indexList="props.indexList"
		:id="getRandomInt(0, 100000000000000)"
		class="item"
		:style="{ backgroundColor: lists[indexList][indexItem].color }"
	>
	</span>
</template>

<style scoped>
.item {
	display: inline-block;
	margin: 1px;
	width: 20px;
	height: 20px;
	border: 1px solid #000;
	cursor: pointer;
}
</style>
