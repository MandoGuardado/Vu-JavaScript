new Vue({
  el: '#vue-app',
  data: {
    firstName: 'Armando',
    lastName: "Guardado",
    job: 'Programmer',
    website: 'www.google.com',
    websiteTag: '<a href="www.yahoo.com">Yahoo website</a>'
  },
  methods:{
    greet:function(timeOfDay){

      return 'Good ' + timeOfDay + ' ' + this.firstName
    }
  }

});
