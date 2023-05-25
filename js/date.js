function getDateforCard(date) {
    const incomeDate = date.split('.').reverse().join('-');
    const today = new Date(incomeDate);
    const monthsArr = ["Января", "Февраля","Марта","Апреля","Мая","Июня","Июля","Августа","Сентября","Октября","Ноября","Декабря"];
    const weekdaysArr = ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'];

    const month = today.getMonth();
    const weekDay = today.getDay();
    const weekNumber = Math.ceil(today.getDate() / 7); 
    const year = today.getFullYear();

    console.log(today);
    console.log(monthsArr[month]);
    console.log(weekdaysArr[weekDay]);
    console.log(weekNumber);
    return `${weekdaysArr[weekDay]}, ${weekNumber} неделя ${monthsArr[month]} ${year} года`
}