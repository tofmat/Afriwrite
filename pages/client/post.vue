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
            <div>
              <h3>Select Duration </h3>
              <p>Set the duration and type of job this is</p>
              <v-radio-group v-model="radioGroup">
              <div class="row noMargin">
                <v-col cols="12" sm="4">
                  <div class="radioBoxDiv">
                    <div class="flex flexRowReverse"><v-radio color="green darken-3" value="n1"></v-radio></div>
                    <div class="flex alignCenter justifyCenter columnFlex">
                      <img src="../../assets/images/working.svg" alt="work" width="30px">
                      <h3>One-time Gig</h3>
                      <p class="textCenter">Find the perfect freelancer for a very short term project</p>
                    </div>
                  </div>
                </v-col>
                <v-col cols="12" sm="4">
                  <div class="radioBoxDiv">
                    <div class="flex flexRowReverse"><v-radio color="green darken-3" value="n2"></v-radio></div>
                    <div class="flex alignCenter justifyCenter columnFlex">
                      <img src="../../assets/images/working-at-home.svg" alt="work" width="30px">
                      <h3>Long Term Engagement</h3>
                      <p class="textCenter">Find the perfect freelancer for a very short term project</p>
                    </div>
                  </div>
                </v-col>
                <v-col cols="12" sm="4">
                  <div class="radioBoxDiv">
                    <div class="flex flexRowReverse"><v-radio color="green darken-3" value="n3"></v-radio></div>
                    <div class="flex alignCenter justifyCenter columnFlex">
                      <img src="../../assets/images/handshake.svg" alt="work" width="30px">
                      <h3>Extended Engagement</h3>
                      <p class="textCenter">Find the perfect freelancer for a very short term project</p>
                    </div>
                  </div>
                </v-col>
              </div>
              </v-radio-group>
            </div>
            <div>
              <h3>What level of experience do you need? </h3>
              <p>Set the duration and type of job this is</p>
              <v-radio-group v-model="radioGroup">
              <div class="row noMargin">
                <v-col cols="12" sm="4">
                  <div class="radioBoxDiv">
                    <div class="flex flexRowReverse"><v-radio color="green darken-3" value="n1"></v-radio></div>
                    <div class="flex alignCenter justifyCenter columnFlex mb-5">
                      <h3>Entry Level</h3>
                    </div>
                  </div>
                </v-col>
                <v-col cols="12" sm="4">
                  <div class="radioBoxDiv">
                    <div class="flex flexRowReverse"><v-radio color="green darken-3" value="n2"></v-radio></div>
                    <div class="flex alignCenter justifyCenter columnFlex mb-5">
                      <h3>Intermediate</h3>
                    </div>
                  </div>
                </v-col>
                <v-col cols="12" sm="4">
                  <div class="radioBoxDiv">
                    <div class="flex flexRowReverse"><v-radio color="green darken-3" value="n3"></v-radio></div>
                    <div class="flex alignCenter justifyCenter columnFlex mb-5">
                      <h3>Expert</h3>
                    </div>
                  </div>
                </v-col>
              </div>
              </v-radio-group>
            </div>
          </div>
        </div>
        <div class="flex mb-5">
          <div class="mr-5">
            <p class="circleRound mainColor mt-1">4</p>
          </div>
          <div class="">
            <div class="mb-5">
              <h3>Proposed Project Price Range and Duration </h3>
              <p>Propose an amount and time for a freelancer to work with</p>
            </div>
            <div>
              <div class="my-2">
                <h4>Price range</h4>
                <div class="flex alignCenter my-1">
                  <input type="text" class="mainSearch">
                  <p class="mx-3 noMargin">To</p>
                  <input type="text" class="mainSearch">
                </div>
              </div>
              <div class="my-2">
                <h4>Duration</h4>
                <div class="flex alignCenter my-1">
                  <input type="text" class="mainSearch" placeholder="Days">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-10 flex justifyCenter mobileColumn">
        <v-btn class="findBtn mx-3 my-1" to="#">Post Job</v-btn>
        <v-btn class="greyBtn mx-3 my-1" to="#">Save to Draft</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'client',
  data: () => ({
    radioGroup: 'n1',
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
.radioBoxDiv {
  border: 1px #008952 solid;
  border-radius: 10px;
  padding: 15px;
}
</style>