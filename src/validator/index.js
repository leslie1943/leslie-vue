var checkAge = (rule, value, callback) => {
    if (!value) {
      return callback(new Error('年龄不能为空'));
    }
    setTimeout(() => {
      if (!Number.isInteger(value)) {
        return callback(new Error('请输入数字值'));
      } else {
        if (value < 18) {
          callback(new Error('必须年满18岁'));
        } else {
            return callback();
        }
      }
    }, 1000);
  };

export default {
    checkAge,
};