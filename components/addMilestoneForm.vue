<template>
  <div>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">
              Description
            </th>
            <th class="text-left">
              Due date
            </th>
            <th class="text-left">
              Milestone Amount
            </th>
            <th class="textCenter">
              
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
                <v-text-field
                  v-model="val.description"
                  placeholder="Item Description"
                  required
                ></v-text-field>
            </td>
            <td>
              <v-menu
                ref="menu"
                v-model="menu"
                :close-on-content-click="false"
                :return-value.sync="date"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="date"
                    label="Pick date"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="date"
                  no-title
                  scrollable
                >
                  <v-spacer></v-spacer>
                  <v-btn
                    text
                    color="primary"
                    @click="menu = false"
                  >
                    Cancel
                  </v-btn>
                  <v-btn
                    text
                    color="primary"
                    @click="$refs.menu.save(date)"
                  >
                    OK
                  </v-btn>
                </v-date-picker>
              </v-menu>
            </td>
            <td>
                <v-text-field
                  placeholder="Price per unit"
                  v-model="val.rate"
                  required
                >
                  <v-icon
                    slot="prepend"
                    color="green"
                  >
                    mdi-plus
                  </v-icon>
                </v-text-field>
            </td>
            <td class="textCenter">
              <i class="far fa-2x fa-times-circle"></i>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
export default {
  props: ['initialItem'],
  data() {
    return {
      val: this.initialItem
    }
  },
  computed: {
    gross_amount() {
        const rate = this.val.rate
        const quantity = this.val.quantity

        const net_amount = rate * quantity

        // this.$emit('updatePrice', this.item)
        return net_amount
    }
  },
  methods: {
    // removeItem(val) {
    // this.invoice.items = this.invoice.items.filter(ite => {
    //   return ite.val.item_num !== val.item_num
    // })
  }
  }
</script>

<style>

</style>