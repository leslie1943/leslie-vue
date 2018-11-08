import validationtool from "@/validator/";

// check age
var checkAge = (rule, value, callback) => {
  if (!value) {
    return callback(new Error('年龄不能为空'));
  }
  // setTimeout(() => {
  if (!Number.isInteger(Number(value))) {
    return callback(new Error('请输入数字值'));
  } else {
    if (value < 18) {
      callback(new Error('必须年满18岁'));
    } else if (value > 200) {
      VUE_INSTANCE.$message({ message: "你是认真的吗", type: "warning" });
      return callback(new Error('太大了'));
    } else {
      return callback();
    }
  }
  // }, 1000);
};

export default {
  name: validationtool.name,
  age: [{
      validator: checkAge,
      trigger: 'blur'
    },
    {
      required: true,
      message: '请输入年龄',
      trigger: 'blur'
    },
  ],
  start: [{
    required: true,
    message: '请输入开始日期',
    trigger: ['blur', 'change']
  }],
  end: [{
    required: true,
    message: '请输入结束日期',
    trigger: ['blur', 'change']
  }],
  regCapital: [{
    required: true,
    message: '请输入注册资金',
    trigger: ['blur', 'change']
  }],
};
