<template>
  <div class="wrapper">
    <Sidebar />
    <div class="layout">
      <Topbar />
      <div class="content">
        <Dashboard />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Sidebar from './components/Sidebar.vue';
import Topbar from './components/Topbar.vue';
import Dashboard from './views/Dashboard.vue';

export default {
  components: {
    Dashboard,
    Sidebar,
    Topbar
  }
}
</script>
