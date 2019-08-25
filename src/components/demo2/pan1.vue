<template>
  <div>
      <p>pan1</p>
      <router-link to="/pan1">pan2</router-link>
      <span>===</span>
      <router-link to="/pan1/pan3">pan3</router-link>
      <router-view/>
  </div>
</template>

<script>
  export default {
    data() {
			return {
				
			}
		},
		mounted(){
			console.log("pan1页");
			console.log("pan1测试");
		}
  }
</script>

<style lang="less" scoped>
body{
		 background-color: #F4F4F4;
	}
	.main{
		width: 100%;
		padding:118px 30px 0;
		.topimgbox{
			width:100%;
			height:300px;
			background-size:100% 100%;
		}
		ul li{
			margin-top:20px;
		}
		.listbox{
			padding:30px;
			background: #fff;
			border-radius: 10px;
		}
		.title{
			display: -webkit-box;
			width: 100%;
			height: 2.56em;
			font-size:30px;
			font-weight:600;
			-webkit-box-orient: vertical;
			box-orient: vertical;
			-webkit-line-clamp:2;
			overflow: hidden;
		}
		.foot{
			display: flex;
			line-height:50px;
			.time{
				flex: 1;
				font-size:26px;
				color:#999999;
			}
			#state{
				font-size: 30px;

			}
		}
	}
.finish{
  color:#19B865;
}
.unfinish{
  color:#FF8B3D;
}
</style>