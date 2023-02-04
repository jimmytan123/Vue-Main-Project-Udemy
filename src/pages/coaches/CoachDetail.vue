<template>
  <div v-if="!isLoading">
    <section>
      <base-card>
        <h2>{{ fullName }}</h2>
        <h3>${{ rate }}/hour</h3>
      </base-card>
    </section>
    <section>
      <base-card>
        <header>
          <h2>Interested? Reach out now!</h2>
          <base-button link :to="contactLink">Contact</base-button>
        </header>
        <router-view></router-view>
      </base-card>
    </section>
    <section>
      <base-card>
        <base-badge
          v-for="area in areas"
          :key="area"
          :type="area"
          :title="area"
        ></base-badge>
        <p>{{ description }}</p>
      </base-card>
    </section>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      selectedCoach: null,
      isLoading: false,
    };
  },
  computed: {
    fullName() {
      return this.selectedCoach.firstName + ' ' + this.selectedCoach.lastName;
    },
    areas() {
      return this.selectedCoach.areas;
    },
    rate() {
      return this.selectedCoach.hourlyRate;
    },
    description() {
      return this.selectedCoach.description;
    },
    contactLink() {
      return this.$route.path + '/' + this.id + '/contact';
    },
  },
  async created() {
    this.isLoading = true;

    // await this.$store.dispatch('coaches/loadCoaches', {
    //   forceRefresh: true,
    // });

    // this.selectedCoach = this.$store.getters['coaches/coaches'].find(
    //   (coach) => coach.id === this.id
    // );

    // Fetch the single coach based on id
    const response = await fetch(
      `https://vue-coach-app-9f21c-default-rtdb.firebaseio.com/coaches/${this.id}.json`
    );

    this.selectedCoach = await response.json();

    this.isLoading = false;
  },
};
</script>