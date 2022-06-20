import Vue from 'vue'

export default () => {
  Vue.filter('currency', function (value) {
     if (!value) return ''
     return `$${value}`
  })

  Vue.filter('slicee', function(data) {
    let str = data.toString();
    let res = str.slice(86);
    return res;
  })
}