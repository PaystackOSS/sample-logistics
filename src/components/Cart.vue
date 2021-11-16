<template>
  <div class="cart">
    <div class="header">
      <h2>Your selected plants</h2>
    </div>
    <div class="itemlist">
      <div class="item" v-for="(plant, index) in plants" :key="index">
        <div class="item__desc">
          <img class="item__image" :src="plant.imagePath" />
          <h4>{{ plant.name }}</h4>
        </div>
        <div class="item__price">
          <span>{{ parseCurrency(plant.price) }}</span>
        </div>
        <div class="item__quantity">
          <div class="qty-wrapper">
            <span class="qty-wrapper__button" @click="reduceQuantity(plant.id)">&ndash;</span>
            <span class="qty-wrapper__value">{{ plant.quantity }}</span>
            <span class="qty-wrapper__button" @click="increaseQuantity(plant.id)">+</span>
          </div>
        </div>
        <div class="item__subtotal">
          {{ calculateUnitTotal(index) }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  setup() {

  },
  computed: {
    ...mapGetters('cart', {
      plants: 'cartProducts'
    })
  },
  methods: {
    increaseQuantity (id) {
      this.$store.commit('cart/incrementPlantQuantity', id)
    },
    reduceQuantity (id) {
      this.$store.commit('cart/decrementPlantQuantity', id)
    },
    calculateUnitTotal (index) {
      return this.parseCurrency(this.plants[index].price * this.plants[index].quantity)
    },
    parseCurrency (amount) {
      return new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(amount)
    }
  }
}
</script>

<style lang="scss" scoped>
.cart {
  .header {
    margin-bottom: 50px;
  }
}

.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 30px;
  margin-bottom: 30px;
  border-bottom: 1px dashed #e9e6e6;

  &:first-child {
    padding-top: 30px;
    border-top: 1px dashed #e9e6e6;
  }

  &__desc {
    flex: 1 1 20%;
    display: flex;
    gap: 20px;
    align-items: center;
  }

  &__image {
    width: 90px;
    height: 60px;
    border-radius: 12px;
  }

  &__quantity {
    flex: 1 1 auto;
    display: flex;
  }

  &__price {
    flex: 1 1 auto;
  }

  // &__subtotal {
  //   flex: 1 1 auto;
  // }
}

.qty-wrapper {
  display: flex;
  border: 1px solid #efefef;

  &__value{
    font-size: 14px;
    padding: 6px 20px;
    text-align: center;
    cursor: default;
  }

  &__button {
    background:#f2f2f2;
    border-radius:4px;
    font-weight: 600;
    padding:4px 8px;
    border:1px solid #f5f3f3;
    cursor: pointer;
  }
}

</style>
