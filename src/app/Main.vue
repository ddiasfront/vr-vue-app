<template>
  <div id="root">
    <main>
      <form-component></form-component>
    </main>
  </div>
</template>

<script>
import LeadForm from './LeadForm.vue';

export default {
  name: 'Main',
  components: {
    'form-component': LeadForm
  }
};
</script>
