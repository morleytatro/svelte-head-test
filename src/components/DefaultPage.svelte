<svelte:head>
  <title>Some Title</title>
  <link rel="canonical" href="/">
  <meta name="description" content="some description">
  <meta name="keywords" content="some keywords">
</svelte:head>

<div>Changed again!</div>

<script>
  import { onMount } from 'svelte';

  onMount(() => {
    console.log('loaded!');
  })
</script>