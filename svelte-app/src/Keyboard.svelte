<script lang="ts">
  import { createEventDispatcher, onDestroy, onMount } from "svelte";
  import { keyboard } from "./keyboard";

  const emitter = createEventDispatcher();

  function handle(e) {
    const { key } = e;
    emitter("change", key.toLowerCase());
  }

  onMount(() => window.addEventListener("keydown", handle));
  onDestroy(() => window.removeEventListener("keydown", handle));

  function onClick(e) {
    const value = e.currentTarget.innerText;
    emitter("change", value);
  }
</script>

<style>
  .row {
    display: flex;
  }

  .item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 20px;
    border: 1px solid black;
    margin: 1px;
    transition: 0.3s;
  }

  .item:active {
    position: relative;
    background-color: aqua;
    top: 1px;
    right: 1px;
  }
</style>

<div>
  {#each keyboard as row}
    <div class="row">
      {#each row as key}
        <div on:click={onClick} class="item">{key.value}</div>
      {/each}
    </div>
  {/each}
</div>
