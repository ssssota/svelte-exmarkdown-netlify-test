<script lang="ts">
  import {unified} from 'unified'
  import remarkParse from 'remark-parse'
  import remarkRehype from 'remark-rehype'
  import rehypeSanitize from 'rehype-sanitize'
  import rehypeStringify from 'rehype-stringify'

  let value = '# Hello remark'
  let md = ''
  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeSanitize)
    .use(rehypeStringify)
  
  $: md = processor.processSync(value).toString();
</script>

<p>
  <textarea bind:value={value} />
</p>

{@html md}
