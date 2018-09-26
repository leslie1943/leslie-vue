<template>
  <el-row>
    <el-col :span="isDist? 8 : 12" style="paddingRight:5px;">
      <el-select
        :disabled="isDisabled || disableFlag"
        v-model="comp_selectProv"
        placeholder="省"
        v-on:change="handler_selectChange">
        <el-option
          v-bind:key="item.code"
          v-for="item in provs"
          :label="item.name"
          :value="item.code">
        </el-option>
      </el-select>
    </el-col>

    <el-col :span="isDist? 8 : 12" style="paddingLeft:5px;">
      <el-select
        :disabled="isDisabled || disableFlag"
        v-model="comp_selectCity"
        placeholder="市"
        v-on:change="handler_selectChange">
        <el-option
          v-bind:key="item.code"
          v-for="item in citys"
          :label="item.name"
          :value="item.code">
        </el-option>
      </el-select>
    </el-col>

    <el-col :span="8" style="paddingLeft:5px;" v-if="isDist">
      <el-select
        :disabled="isDisabled || disableFlag"
        v-model="comp_selectDist"
        placeholder="区、县"
        v-on:change="handler_selectChange">
        <el-option
          v-bind:key="item.code"
          v-for="item in dists"
          :label="item.name"
          :value="item.code">
        </el-option>
      </el-select>
    </el-col>

  </el-row>
</template>
<script>
import { getProvs } from "@/utils/provs";
const provs = getProvs();
export default {
  name: "CitySelect",
  data() {
    return {
      citys: [],
      dists: [],
      selectProv: "",
      selectCity: "",
      selectDist: "",

      selectProvDesc: "",
      selectCityDesc: "",
      selectDistDesc: "",
      provs,
      isDist: true,
      isDisabled: false,
    };
  },
  props: {
    selectprov: String,
    selectcity: String,
    selectdist: String,
    selectprovdesc: String,
    selectcitydesc: String,
    selectdistdesc: String,
    distVisible: Boolean,
    disableFlag: Boolean,
  },
  computed: {
    comp_selectProv: {
      // getter
      get() {
        this.citys = [];
        this.dists = [];
        if (this.selectProv !== "") {
          for (const val of this.provs) {
            if (this.selectProv === val.code) {
              this.citys = val.children;
              this.dists = val.children.children;
            }
          }
          return this.selectProv;
        } else if (this.selectprov) {
          for (const val of this.provs) {
            if (this.selectprov === val.code) {
              this.citys = val.children;
              this.dists = val.children.children;
            }
          }
        }
        for (const val of this.provs) {
          if (this.selectprov === val.code) {
            this.citys = val.children;
            this.dists = val.children.children;
          }
        }
        return this.selectprov;
      },
      // setter
      set(newValue) {
        this.selectProv = newValue;
        this.citys = [];
        this.dists = [];
        if (this.selectProv !== "") {
          for (const val of this.provs) {
            if (this.selectProv === val.code) {
              this.citys = val.children;
              this.dists = val.children.children;
              this.selectProvDesc = val.name;
            }
          }
        }
        this.comp_selectCity = this.citys[0]["code"];
        this.selectCity = this.citys[0]["code"];
        this.selectCityDesc = this.citys[0]["name"];

        this.comp_selectDist = this.citys[0].children[0]["code"];
        this.selectDity = this.citys[0].children[0]["code"];
        this.selectDityDesc = this.citys[0].children[0]["name"];
      }
    },
    comp_selectCity: {
      // getter
      get() {
        this.dists = [];
        if (this.selectCity !== "") {
          for (const val of this.citys) {
            if (this.selectCity === val.code) {
              this.dists = val.children;
            }
          }
          return this.selectCity;
        } else if (this.selectcity) {
          for (const val of this.citys) {
            if (this.selectcity === val.code) {
              this.dists = val.children;
            }
          }
        }
        for (const val of this.citys) {
          if (this.selectcity === val.code) {
            this.dists = val.children;
          }
        }
        return this.selectcity;
      },
      // setter
      set(newValue) {
        this.selectCity = newValue;
        this.dists = [];
        if (this.selectCity !== "") {
          for (const val of this.citys) {
            if (this.selectCity === val.code) {
              this.dists = val.children;
              this.selectCityDesc = val.name;
            }
          }
        }
        this.comp_selectDist = this.dists[0]["code"];
        this.selectDist = this.dists[0]["code"];
        this.selectDistDesc = this.dists[0]["name"];
      }
    },

    comp_selectDist: {
      // getter
      get() {
        if (this.selectDist !== "") {
          return this.selectDist;
        }
        return this.selectdist;
      },
      // setter
      set(newValue) {
        this.selectDist = newValue;
        for (const val of this.dists) {
          if (this.selectDist === val.code) {
            this.selectDistDesc = val.name;
          }
        }
      }
    }
  },
  methods: {
    handler_selectChange() {
      this.$emit("change", {
        selectProv: this.selectProv === "" ? this.selectprov : this.selectProv,
        selectCity: this.selectCity === "" ? this.selectcity : this.selectCity,
        selectDist: this.selectDist === "" ? this.selectdist : this.selectDist,
        selectProvDesc:
          this.selectProvDesc === ""
            ? this.selectprovdesc
            : this.selectProvDesc,
        selectCityDesc:
          this.selectCityDesc === ""
            ? this.selectcitydesc
            : this.selectCityDesc,
        selectDistDesc:
          this.selectDistyDesc === ""
            ? this.selectdistdesc
            : this.selectDistDesc
      });
    }
  },
  created() {
    this.isDist = this.distVisible;
    this.isDisabled = this.disableFlag ? this.disableFlag : false;
  }
};
</script>

