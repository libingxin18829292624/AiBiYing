<template>
    <el-table
      :data="tableData"
      style="width: 100%"
      max-height="100%">
      <el-table-column
        prop="country"
        label="国家"
        width="80">
      </el-table-column>
      <el-table-column
        prop="province"
        label="省份"
        width="80">
      </el-table-column>
      <el-table-column
        prop="city"
        label="城市"
        width="80">
      </el-table-column>
      <el-table-column
        prop="houseTitle"
        label="房源名称"
        width="300">
      </el-table-column>
      <el-table-column
        prop="price"
        label="价格"
        width="80">
      </el-table-column>
      <el-table-column
        prop="type"
        label="房间简述"
        width="100">
      </el-table-column>
      <el-table-column
        prop="stars"
        label="评价星级"
        width="80">
      </el-table-column>
      <el-table-column
        prop="ownerName"
        label="房东姓名"
        width="150">
      </el-table-column>
      <el-table-column
        prop="role"
        label="退房政策"
        width="180">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="100">
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="deleteRow(scope.$index, tableData)"
            type="text"
            size="small">
            移除
          </el-button>
          <el-button
            type="text"
            size="small">
            <span class="editItem" @click="edit($event)">编辑</span>
          </el-button>
          <el-dialog :modal="isModal" title="修改信息" :visible.sync="dialogFormVisible">
            <el-form>
              <el-form-item label="国家" :label-width="formLabelWidth" :size="size">
                <el-input v-model="tableData[index].country" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="省份" :label-width="formLabelWidth" :size="size">
                <el-input v-model="tableData[index].province" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="城市" :label-width="formLabelWidth" :size="size">
                <el-input v-model="tableData[index].city" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="房源名称" :label-width="formLabelWidth" :size="size">
                <el-input v-model="tableData[index].houseTitle" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="价格" :label-width="formLabelWidth" :size="size">
                <el-input v-model="tableData[index].price" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="房源简述" :label-width="formLabelWidth" :size="size">
                <el-input v-model="tableData[index].type" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="评价星级" :label-width="formLabelWidth" :size="size">
                <el-input v-model="tableData[index].stars" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="房东姓名" :label-width="formLabelWidth" :size="size">
                <el-input v-model="tableData[index].ownerName" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="退房政策" :label-width="formLabelWidth" :size="size">
                <el-input v-model="tableData[index].role" auto-complete="off"></el-input>
              </el-form-item>
            </el-form>
          </el-dialog>
        </template>
      </el-table-column>
    </el-table>
</template>

<script>
  import $ from "jquery"
  import allData from "../json/index"
  export default {
    methods: {
      deleteRow(index, rows) {
        rows.splice(index, 1);
      },
      edit($event) {
        this.dialogFormVisible = true;
        this.index = $('.editItem').index($event.target) - 10;
      },
      addData(){
        let oneData;
        for(let item in this.allData){
          for(let n in this.allData[item]){
            let c = this.allData[item][n];
            oneData = {
              country: c.address.country,
              province: c.address.province,
              city: c.address.city,
              houseTitle: c.houseTitle,
              price: c.price,
              type: c.type,
              stars:c.stars,
              ownerName:c.ownerName,
              role:c.role,
            }
            this.tableData.push(oneData);
          }
        }
      }
    },
    data() {
      return {
        allData:allData,
        tableData: [],
        isModal:false,
        index:0,
        dialogFormVisible: false,
        formLabelWidth: '80px',
        size:"mini"
        }
    },
    updated(){
        this.$store.state.storedData = this.tableData;
    },
    mounted(){
      this.addData();
    }
  }
</script>

<style lang="scss" type="text/scss" scoped>
</style>
