<script lang="ts">
  import Markdown from 'svelte-exmarkdown';
  let md = '# Hello svelte-exmarkdown';
</script>

<p>
  <textarea bind:value={md} />
</p>

<Markdown {md} />
