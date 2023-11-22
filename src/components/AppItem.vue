<script setup>
import { ref, toRefs, defineProps, watch, defineEmits } from 'vue';

const props = defineProps({
	lists: Array,
	list: Array,
	item: Object,
	indexList: Number,
	indexItem: Number,
	itemActive: Boolean,
});

const itemActive = ref(props.itemActive);

const toggleItem = () => {
	itemActive.value = !itemActive.value;
};
</script>

<template>
	<li class="item">
		<label :for="item.id" class="item__title">
			<input
				type="checkbox"
				name="item"
				:id="item.id"
				class="item-input"
				v-model="lists[indexList][indexItem].visibility"
				@change="toggleItem"
			/>
			<span class="item__name"> Item {{ `${indexItem + 1}` }}</span>
		</label>

		<div class="item__params">
			<input
				type="number"
				min="0"
				class="item__quantityInput"
				v-model="lists[indexList][indexItem].quantity"
			/>
			<input
				type="color"
				class="item__colorInput"
				v-model="lists[indexList][indexItem].color"
			/>
		</div>
	</li>
</template>

<style scoped>
.item {
	display: flex;
	align-items: center;
	justify-content: flex-start;
	margin: 10px 0;
}

.item__title {
	display: flex;
	align-items: center;
	margin-right: auto;
}

.item__name {
	margin-left: 10px;
	font-size: 14px;
}
.item__params {
	display: flex;
	align-items: center;
}

.item__quantityInput {
	width: 25px;
	height: 25px;
	margin-left: 20px;
	text-align: center;
}

.item__colorInput {
	width: 25px;
	height: 25px;
	padding: 0;
	margin-left: 120px;
	margin-right: 40px;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
	-webkit-appearance: none;
	margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
}
input[type='color' i]::-webkit-color-swatch-wrapper {
	padding: 0;
}
</style>
