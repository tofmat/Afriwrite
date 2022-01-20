<template>
  <div>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Description</th>
            <th class="text-left">Deliverable</th>
            <th class="text-left">Milestone Amount</th>
            <th class="textCenter"></th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="singleItem in newProposal.milestones"
            :key="singleItem.description"
          >
            <td>
              <v-text-field
                v-model="val.description"
                placeholder="Description of this milestone"
                required
              ></v-text-field>
            </td>
            <td>
              <v-text-field
                v-model="val.expected_time"
                placeholder="What would you deliver in this milestone ?"
                required
              ></v-text-field>
            </td>
            <td>
              <v-text-field
                placeholder="Price per unit"
                v-model="val.milestone_amount"
                required
              >
                <v-icon slot="prepend" color="green"> mdi-currency-ngn </v-icon>
              </v-text-field>
            </td>
            <td class="textCenter">
              <i class="far fa-times-circle" @click="removeItem(val)"></i>
            </td>
          </tr>
        </tbody>
        <div class="my-5">
          <a @click="addItem()"
            ><p class="mainColor">
              <span><i class="fas fa-plus"></i></span> Add new Milestone
            </p></a
          >
        </div>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
export default {
  props: ["initialItem", "proposal"],
  data() {
    return {
      val: this.initialItem,
      newProposal: this.proposal,
    };
  },
  computed: {
    gross_amount() {
      const rate = this.val.rate;
      const quantity = this.val.quantity;

      const net_amount = rate * quantity;

      // this.$emit('updatePrice', this.item)
      return net_amount;
    },
  },
  methods: {
    addItem() {
      this.newProposal.milestones.push({
        description: "",
        milestone_amount: "",
        expected_time: "",
      });
    },
  },
};
</script>

<style>
</style>