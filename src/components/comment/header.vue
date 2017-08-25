<template>
	<div class="header">
		<el-row>
			<el-col :span="4">
				<div class="grid-content "></div>
			</el-col>
			<el-col :span="16">
				<div class="grid-content ">
					<div class="search">
					<div class="left">
						
					 <el-select v-model="value" placeholder="目录">
					    <el-option
					      v-for="item in options"
					      :key="item.value"
					      :label="item.label"
					      :value="item.value"
					      >
					    </el-option>
					  </el-select>
				      
					
					</div>	
					<div class="right">
					<el-input  placeholder="搜索" icon="search" v-model="input2" :on-icon-click="search">
					</el-input>
					</div>
					</div>
				</div>
			</el-col>
			<el-col :span="4">
				<div class="grid-content ">
					<div class="btn">
					<el-button type="default" >登录</el-button>
                    <el-button type="primary" >注册</el-button>
                    </div>
				</div>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	export default{
		data () {
			return{
				input2:'',
				options: [{
			          value: '选项1',
			          label: '黄金糕'
			        }, {
			          value: '选项2',
			          label: '双皮奶'
			        }, {
			          value: '选项3',
			          label: '蚵仔煎'
			        }, {
			          value: '选项4',
			          label: '龙须面'
			        }, {
			          value: '选项5',
			          label: '北京烤鸭'
			        }],
			        value: ''
		
			}
		},
		methods:{
			 handleCommand(command) {
              this.$message('click on item ' + command);
           },
             search () {
             	
             }
		}
	}
</script>

<style>

</style>