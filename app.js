new Vue({
  el: '#vue-app',
  data: {
    firstName: 'Armando',
    lastName: "Guardado"
  },
  methods:{
    greet:function(type){

      return 'Good ' + type + ' ' + this.firstName
    }
  }

});
