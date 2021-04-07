new Vue({
  el: '#vue-app',
  data: {
   age: 25,
   y:0,
   x:0
  },
  methods:{
    logName: function(){
      console.log("Printed name");
    },
    logAge: function(){
      console.log("Printed age");
    }

  }

});
