<template>
    <router-view></router-view>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      watch: {
        '$route' (to, from) {
          if (from.name === 'index' && to.name !== 'index') {
            let positionStore = {
              x: window.pageXOffset,
              y: window.pageYOffset
            };
            sessionStorage.setItem('indexScrollTop', JSON.stringify(positionStore));
          }
        }
      }
    }
  }
}
</script>

<style>
blockquote, body, button, dd, dl, dt, fieldset, form, h1, h2, h3, h4, h5, h6, hr, input, legend, li, ol, p, pre, td, textarea, th, ul {
  margin: 0;
  padding: 0;
}

 html {
    font-size: 26.67vw;
    height: 100%;
 }

  body{
    height: 100%;
  }


ul, ol ,li{
  list-style: none;
}

a {
  text-decoration: none;
}

</style>
