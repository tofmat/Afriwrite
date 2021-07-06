<template>
  <div>
    <div class="dashDefaultContent">
      <h2 class="mainColor">Post a Job</h2>
      <h3 class="mainColor slimText">Get Started</h3>
      <div class="postJob mt-5">
        <div class="flex mb-5">
          <div class="mr-5">
            <p class="circleRound mainColor mt-1">1</p>
          </div>
          <div class="fullWidth">
            <h3>Enter the title of your job </h3>
            <p>Make it well descriptive and understandable</p>
            <input type="text" class="mainSearch">
            <div>
              <h4 class="darkGreyColor mt-3">A few examples you can emulate</h4>
              <p class="noMargin"><span><i class="far fa-dot-circle mr-3"></i></span>UX Writer needed for a writing gig</p>
              <p class="noMargin"><span><i class="far fa-dot-circle mr-3"></i></span>UX Writer needed for a writing gig</p>
              <p class="noMargin"><span><i class="far fa-dot-circle mr-3"></i></span>UX Writer needed for a writing gig</p>
            </div>
          </div>
        </div>
        <div class="flex mb-5">
          <div class="mr-5">
            <p class="circleRound mainColor mt-1">2</p>
          </div>
          <div class="fullWidth">
            <h3>Job Description </h3>
            <p>Describe deliverables, anything unique about the project</p>
            <textarea name="apply" id="apply" rows="5" class="textArea" placeholder="Input text here"></textarea>
            <h3 class="mt-3">Choose Category</h3>
            <p>Select the category this job falls under (You can select more than one)</p>
            <v-autocomplete
              v-model="values"
              :items="items"
              outlined
              dense
              chips
              color="green darken-3"
              small-chips
              label="Categories"
              multiple
            ></v-autocomplete>
            <h3 class="my-3">Attach additional project files</h3>
            <p class="textCenter dragAndDrop">Drag and drop, or <span class="mainColor">upload</span> files</p>
            <small>Attach a maximum of 5 files, not more than 10mb each</small>
          </div>
        </div>
        <div class="flex mb-5">
          <div class="mr-5">
            <p class="circleRound mainColor mt-1">3</p>
          </div>
          <div class="fullWidth">
            <h3>Select Duration </h3>
            <p>Set the duration and type of job this is</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'client',
  data: () => ({
    items: ['Content writing', 'Articles', 'Blogging', 'Copywriting'],
    values: ['Articles', 'Blogging'],
    value: null,
  }),
}
</script>

<style>
.circleRound {
  border: 2px solid #008952;
  border-radius: 50%;
  padding: 1px 8px;
}
.dragAndDrop {
  padding: 40px;
  border: 1px dashed #008952;
}
</style>