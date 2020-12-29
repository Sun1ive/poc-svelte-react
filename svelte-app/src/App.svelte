<script lang="ts">
  import Input from "./Input.svelte";
  import Keyboard from "./Keyboard.svelte";

  let text: string = "";

  function onChange(e: CustomEvent<string>) {
    console.log("parent ", e.detail);
    if (e.detail === "clear") {
      text = "";
    } else if (e.detail === "space") {
      text += "&nbsp;";
    } else if (e.detail === "backspace") {
      text = text.slice(0, text.length - 1);
    } else {
      text += e.detail;
    }
  }

  $: nodes = text.split(/(\s|\&nbsp;)/g);
</script>

<style>
  main {
    display: flex;
    flex-flow: column;
    justify-content: space-between;
  }

  .container.node {
    height: 50px;
    border: 1px solid black;
    overflow: hidden;
  }
</style>

<main>
  <Input {text} />

  <hr />
  <div class="container node">
    {#each nodes as node}
      <div>{node}</div>
    {/each}
    {#each nodes as node}
      <div>{node}</div>
    {/each}
    {#each nodes as node}
      <div>{node}</div>
    {/each}
  </div>

  <hr />
  <Keyboard on:change={onChange} />
</main>
