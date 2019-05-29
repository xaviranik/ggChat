<template>
  <div class="navbar">
    <nav class="teal">
      <div class="nav-wrapper">
        <router-link to="/" class="brand-logo center">ggChat</router-link>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <router-link to="/about">About</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style>

</style>
