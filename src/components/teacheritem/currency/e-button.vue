<<template>

  <el-button type="text" @click="open">{{itemtext}}</el-button>
</template>

<script>
import axios from 'axios'
  export default {
      props:{
          bigmenus:Array,
          itemnmber:Number,
          itemtext:String
      },
    methods: {
      open() {
        if(this.itemnmber==0){
          this.$prompt('章名称', '添加章名称', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputErrorMessage: '章名称不正确'
        }).then(({ value }) => {
            axios.post('/addclass',{
              bigmenus:value
            }).then(res=>{

            })
          this.$message({
            type: 'success',
            message: '章名添加成功: ' + value,
            
          });
          
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });       
        });
        }else if(this.itemnmber==1){
            this.$prompt('添加节名称', '添加节名称', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputErrorMessage: '节名称不正确'
        }).then(({ value }) => {

          this.$message({
            type: 'success',
            message: '节添加成功: ' + value,
            
          });
          
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });       
        });
        }else if(this.itemnmber==2){
            this.$prompt('新建班级', '新建班级', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputErrorMessage: '班级名称不正确'
        }).then(({ value }) => {

          this.$message({
            type: 'success',
            message: '班级创建成功: ' + value,
            
          });
          
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });       
        });
        }else if(this.itemnmber==3){
          console.log();
        }

      },
      
    }
  }
</script>