import { reactive, ref } from 'vue';

export const useUtils = () => {
	function getRandomColor() {
		// Генерация случайных значений для красного, зеленого и синего цветов
		let red = getRandomInt(0, 255);
		let green = getRandomInt(0, 255);
		let blue = getRandomInt(0, 255);
		return `rgb(${red}, ${green}, ${blue})`;
	}

	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	function rgbToHex(rgb) {
		// Преобразование строки RGB в массив чисел
		const rgbArray = rgb.match(/\d+/g).map(Number);

		// Преобразование чисел в строку HEX
		const hex = rgbArray
			.map((color) => {
				const hexValue = color.toString(16);
				return hexValue.length === 1 ? '0' + hexValue : hexValue;
			})
			.join('');

		return '#' + hex;
	}

	const data = ref([]);

	function getData() {
		let listDataArray = [];
		const quantity = getRandomInt(4, 10);

		for (let i = 0; i < quantity; i++) {
			let dataObject = reactive({
				id: getRandomInt(0, 100000000000000),
				color: rgbToHex(getRandomColor()),
				quantity: getRandomInt(1, 10),
				visibility: false,
			});
			listDataArray.push(dataObject);
		}
		data.value.push(listDataArray);
	}

	const QUANTITY = 5;

	for (let i = 0; i < QUANTITY; i++) {
		getData();
	}


	return {
		data,
		getRandomInt
	};
};
