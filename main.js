var app = new Vue({
    el: '#app',
    data:{
        message: 'Привет Vue!'
    }
})

var app2 = new Vue({
    el: '#app-2',
    data:{
        message: 'Вы загрузили эту страницу: ' + new Date().toLocaleString()
    }
})

var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: false
    }
})

var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            {text: 'первый'},
            {text: 'второй'},
            {text: 'третий'}
        ]
        
    }
})

var app5 = new Vue({
    el: '#app-5',
    data:{
        message: 'Привет vue'
    },
    methods:{
        rewersMessage: function(){
            this.message = this.message.split('').reverse().join('')
        }
    }
})

var app6 = new Vue ({
    el: '#app-6',
    data:{
        message: 'Текст из Vue'
    }
})

Vue.component('todo-item',{
    props:['todo'],
    template: '<li>{{todo.text}}</li>'
})

var app7 = new Vue({
    el: '#app-7',
    data:{
        groseryList:[
            {text: 'neme'},
            {text: 'lastNeme'},
            {text: 'last'},
            {text: 'lastAge'},
        ]
    }
})

const load = document.querySelector('#load');
const res = document.querySelector('#result');
// Access-Control-Allow-Origin: *;
load.addEventListener('click', () =>{
    // Response(
    //     "Access-Control-Allow-Origin", "https://dev.rusdat.net"
    // );
    
    var xhr = new XMLHttpRequest;
    xhr.open('POST', 'https://dev.rusdat.net/api/test/crm/send_lead', true);
    xhr.responseType = 'text';
    xhr.send();
    xhr.addEventListener('load', () => {
        console.log(xhr);
    });
});


// xhr.open('GET', 'https://dev.rusdat.net/api/test/profiles', true);
// xhr.send();
// console.log(xhr.responseText);

// // 1. Создаём новый XMLHttpRequest-объект
// let xhr = new XMLHttpRequest();

// // 2. Настраиваем его: GET-запрос по URL /article/.../load
// xhr.open('GET', 'https://dev.rusdat.net/api/test/profiles');

// // 3. Отсылаем запрос
// xhr.send();

// // 4. Этот код сработает после того, как мы получим ответ сервера
// xhr.onload = function() {
//   if (xhr.status != 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
//     alert(`Ошибка ${xhr.status}: ${xhr.statusText}`); // Например, 404: Not Found
//   } else { // если всё прошло гладко, выводим результат
//     alert(`Готово, получили ${xhr.response.length} байт`); // response -- это ответ сервера
//   }
// };