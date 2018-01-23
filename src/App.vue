<template>
  <div id="app">
    <div class="containe is-fullhdr">
        <section class="hero is-info">
          <div class="hero-body">
              <h1 class="title">
                Epoch & Unix Timestamp Conversion
              </h1>
              <!-- <h2 class="subtitle">
                Hero subtitle
              </h2> -->
          </div>
        </section>
      <router-view/>
        <div class="container is-small ">
          <div class="content has-text-centered">
            <p>
            <a class="icon" href="https://github.com/naveenccmsd">
              <i class="fa fa-github"></i>
            </a>
            <strong>EpochConvertor</strong> by <a href="https://github.com/naveenccmsd">Naveen.ccmsd</a>. The source code is licensed
            <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
            </p>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
footer {
  background-color: #F2F6FA !important;
}
</style>
