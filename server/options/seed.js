const options = require('./options');

const data = [
    'Прогнозы в IT',
    'Веб-разработка',
    'Мобильная разработка',
    'Фриланс',
    'Алгоритмы',
    'Тестирование IT систем',
    'Разработка игр',
    'Дизайн и юзабилити',
    'Искуственный интелект',
    'Машинное обучение',
];

async function writeDataOption() {
    const length = await options.countDocuments();

    if (length === 0) {
        for (let index = 0; index < data.length; index++) {
            const item = data[index];
            await new options({
                name: item,
                key: index
            }).save();
        }
        console.log('Данные сохранены в базу данных.');
    } else {
        console.log('Данные уже существуют в базе данных. Ничего не сохранено.');
    }
}

// async function writeDataOption(){
// 	const length = await options.count();
// 	if(length == 0){
// 		data.map((item, index) =>{
// 			new options({
// 				name: item,
// 				key: index
// 			}).save()
// 		})
// 	}
// }



module.exports = writeDataOption;