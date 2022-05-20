import { Constants } from "../static/Constants"

import Vue from 'vue'


const mixins = {
  methods:{
    getMessageURL(recipientId){
      const { id, email } = this.$auth.user
      const { CHAT_BASE_URL, CHAT_SIGNATURE_KEY } = Constants
      return CHAT_BASE_URL+`/create-chat?user_id=${id}&email=${email}&recipient_id=${recipientId}&signature_key=${CHAT_SIGNATURE_KEY}`
    }
  }
}

Vue.mixin(mixins)