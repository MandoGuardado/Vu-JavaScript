Vue.component('greeting', {
    template: '<p>Hey there, I am a {{name}}. <button v-on:click = "changeName">Change Name </button></button></p>',
    data: function(){
        return {
            name:'Yoshi'
        }
    },
    methods: {
        changeName:function(){
            this.name = 'Mario'
        }
    }
});

/* new Vue({
    el: '.test',
    template: '<p>I am a template</p>'
}); */

new Vue({
    el: '#vue-app-one'
});

new Vue({
    el: '#vue-app-two'
});