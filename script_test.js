const app = new Vue({
    el: '#app',

    data: {
        name: 'Ryan Guo',
        company: 'Thinkpower Engineer',
        day: '2020/02/15 by Ryan',
        signBox: 'sign',
        imgSrc: '/images/main.png',
        changeMessage: '',
        newMessage: '',
        newColor: '',
        todos: [
            {text: 'Ryan Guo'},
            {text: 'ThinkPower'},
            {text: 'YaYaYa'}
        ],
        showAngular: true,
        showVue: false
    },
    methods: {
        onSubmit(){
            this.company = this.changeMessage
            this.changeMessage = ''
        },
        nameSubmit(){
            this.name = this.newMessage
            this.newMessage = ''
        },
        re(){
            this.newColor = ''
        }
    }
})