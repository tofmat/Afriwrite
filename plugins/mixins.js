import { Constants } from "../static/constants"

import Vue from 'vue'
var hdate = require('human-date')


const mixins = {
  methods:{
    getMessageURL(recipientId=null){
      const { id, email } = this.$auth.user
      const { CHAT_BASE_URL, CHAT_SIGNATURE_KEY } = Constants

      if(recipientId != null){
        return CHAT_BASE_URL+`/create-chat?user_id=${id}&email=${email}&recipient_id=${recipientId}&signature_key=${CHAT_SIGNATURE_KEY}`
      }
      return CHAT_BASE_URL+`/create-chat?user_id=${id}&email=${email}&signature_key=${CHAT_SIGNATURE_KEY}`
    },
    copyLink(link){
      navigator.clipboard.writeText(link);
      this.$toast.success("Link copied");
    },
    logoutUser() {
      console.log("Heyooo");
      localStorage.removeItem("auth._token.local");
      document.cookie =
        "auth._token.local" +
        "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
      window.location.assign("/signin");
    },
    formatStringData(data){
      return data ? data.replaceAll('[', '').replaceAll(']', '').replaceAll('",', '", ').replaceAll('"', '') : ''
    },
    today(){
      const today = new Date()
      const year = today.getFullYear()
      let month = today.getMonth()+1
      if(month.toString().length === 1) month = "0"+month // add leading zero
      const day = today.getDate()
      const formattedDate = `${year}-${month}-${day}`
      console.log(formattedDate)
      return formattedDate
    },
    humanFriendlyDate(date){
      return hdate.relativeTime(date)
    },
    prettyPrintDate(date){
      return hdate.prettyPrint(date)
    }
  }
}

Vue.mixin(mixins)