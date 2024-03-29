import { createApp, defineAsyncComponent } from 'vue';
import App from './App.vue';

import router from './router.js';
import store from './store/index.js';

import BaseCard from './components/ui/BaseCard.vue';
import BaseButton from './components/ui/BaseButton.vue';
import BaseBadge from './components/ui/BaseBadge.vue';
import BaseSpinner from './components/ui/BaseSpinner.vue';

// Define Vue async component, only import when the component is needed
const BaseDialog = defineAsyncComponent(() =>
  import('./components/ui/BaseDialog.vue')
);

const app = createApp(App);

// Register router and Vuex store
app.use(router);
app.use(store);

// Registering global components
app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-badge', BaseBadge);
app.component('base-spinner', BaseSpinner);
app.component('base-dialog', BaseDialog);

app.mount('#app');
