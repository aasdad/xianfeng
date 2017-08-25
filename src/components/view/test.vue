<template>
 <div class="top">
            <ul>
                <li @click="isGet(1)" :class="[c1]">{{tab01Text}}</li>
                <li @click="isGet(2)" :class="[c2]">{{tab02Text}}</li>
                <li @click="isGet(3)" :class="[c3]">{{tab03Text}}</li>
            </ul>
            <div class="bottom">
            <div :is="keet"  keep-alive></div>
            </div>
        </div>
</template>

<script>
	 import test1 from './test1.vue' ;
	 import test2 from './test2.vue' ;
	 import test3 from './test3.vue' ;
	export default{
		data () {
			return{
				tab01Text:'Test1',
                tab02Text:'Test2',
                tab03Text:'Test3',
                currentView:'Test1',
                keet:"first",
                c1:'add_active',
                c2:'',
                c3:''
			}
		},
		methods:{
			 tabToggle:function(tabText){
                this.currentView=tabText
              },
              isGet:function(val){
      switch(val){
        case 1:this.keet = "first";this.c1='add_active';
          this.c2="";this.c3="";break;
        case 2:this.keet = "second";this.c1="";this.c2="add_active";
          this.c3="";break;
        case 3:this.keet = "third";this.c1="";this.c2="";
          this.c3="add_active";break;
      }
    }
  },
     components:{
  	    "first":test1,
  	    "second":test2,
  	    "third":test3,
  	
  	
      }
		
	}

 </script>
 <style>
   .add_active{border:1px solid #f00;}
 </style>