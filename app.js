new Vue({
  el: '#vue-app',
  data: {
   age: 25,
   y:0,
   x:0
  },
  methods:{
    add:function(value){
      return this.age += value;
    },
    subtract:function(value){
      return this.age -= value;
    },
    updateYX: function(event){
      console.log(event);
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
    // click function used to test modifiers
    click:function(){
      alert("You clicked me!")
    }

  }

});
