<script lang="ts">
  export let text: string = "";
</script>

<style>
  .typewritter {
    font-size: 3.5rem;
    display: flex;
    overflow: hidden;
    border-right: 0.15em solid orange;
    margin: 0 auto;
    letter-spacing: 0.15em;
    animation: blink-caret 0.75s step-end infinite;
    min-height: 70px;
    word-break: break-all;
  }

  /* The typing effect */
  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  /* The typewriter cursor effect */
  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: orange;
    }
  }
</style>

<div class="typewritter">
  {@html text}
</div>
