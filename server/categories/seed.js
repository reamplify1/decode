const Categories = require('./categories');

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

async function writeDataCategory() {
    const length = await Categories.countDocuments();

    if (length === 0) {
        for (let index = 0; index < data.length; index++) {
            const item = data[index];
            await new categories({
                name: item,
                key: index
            }).save();
        }
        console.log('Данные сохранены в базу данных.');
    } else {
        console.log('Данные уже существуют в базе данных. Ничего не сохранено.');
    }
}

// проблема: категории сохраняются с правильными ключами, но не по порядку
// async function writeDataCategory(){
//     const length = await categories.count();
//     if(length === 0) {
//         data.map((item, index) => {
//             new categories ({
//                 name: item,
//                 key: index
//             }).save()
//         })
//     }
// }

// module.exports = {writeDataCategory, data};
module.exports = 
{
    writeDataCategory
};

