<template>
  <div class="signUp">
    <div class="fullHeight">
      <div class="signupField mt__50">
        <freelancerProfile />
      </div>
    </div>
  </div>
</template>

<script>
import freelancerProfile from "../../../components/freelancerProfile";
export default {
  components: {
    freelancerProfile
  },
}
</script>

<style>
.mt__50{
  margin-top: -50px;
}
</style>