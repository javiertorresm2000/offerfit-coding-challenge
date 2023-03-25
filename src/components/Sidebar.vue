<template>
  <aside class="sidebar" id="sidebar">
    <nav class="navbar-nav p-2">
      <div class="sidebar-header">
        <span>World Grocer</span>
      </div>
      <Divider></Divider>
      <div class="menu-list">
        <div class="nav-item">
          <div class="menu-item selected">
            <i class="fas fa-house"></i>
            <label for="">Dashboard</label>
          </div>
        </div>
        <div class="nav-item">
          <div class="menu-item">
            <i class="fas fa-users"></i>
            <label for="">Clients</label>
          </div>
        </div>
        <div class="nav-item">
          <div class="menu-item">
            <i class="fas fa-list"></i>
            <label for="">Offers</label>
          </div>
        </div>
        <div class="nav-item">
          <div class="menu-item">
            <i class="fas fa-map-location-dot"></i>
            <label for="">Maps</label>
          </div>
        </div>
        <div class="nav-item">
          <div class="menu-item">
            <i class="fas fa-book"></i>
            <label for="">History</label>
          </div>
        </div>
      </div>
    </nav>
  </aside>
</template>

<script lang="ts">
import Divider from 'primevue/divider';

export default {
  name: 'Sidebar',
  components: {
    Divider
  },
  setup() {
  }

}
</script>