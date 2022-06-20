import Vue from 'vue'

export default () => {
  Vue.filter('currency', function (value) {
     if (!value) return ''
     return `$${value}`
  })

  Vue.filter('fileNameSlicee', function(data) {
    let str = data.toString();
    return str.slice(86);
  })

  Vue.filter('descriptionSlice', function(data) {
    return data.slice(0, 100);
  })


  Vue.filter('dateSlice', function(data) {
    let str = data.toString();
    return str.slice(0, 10);
  })
}