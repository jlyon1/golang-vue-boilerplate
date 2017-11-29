

Vue.component("titlebar",{
  template: `<div v-bind:style=titleStyle><p v-bind:style=paragraphStyle>{{titleText}}</p></div>`,
  data (){
    return{
      titleStyle: {position:"absolute",backgroundColor:"#eee",height:"34px",width:"auto",top:"1",left:"0",right:"0"},
      paragraphStyle: {float: "left",height:"34px",lineHeight:"34px",verticalAlign:"center",paddingLeft:"30px",margin:"0"},
      titleText: "Joseph Lyon"
    }
  }

});

var App = new Vue({
  el: '#app-vue',
  data: {
  },


});
