<template>
  <div id="base-container" class="container w-50 h-75 d-flex flex-column align-items-center px-5 py-4 rounded shadow">
    <div class="w-100 pb-4 mb-2 border-bottom border-dark border-opacity-50">
      <BaseForm />
    </div>
    <div class="p-4 h-100 rounded bg-dark shadow-lg w-100 my-2">
      <BaseTask />
    </div>
  </div>
</template>

<script>
import BaseTask from './components/BaseTask.vue';
import BaseForm from './components/BaseForm.vue';

export default {
  name: 'App',
  components: {
    BaseForm,
    BaseTask,
  }
}
</script>

<style>
#app {
  background-color: #233044;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

#base-container {
  background-color: #334561;
}
</style>
