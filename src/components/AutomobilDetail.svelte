<script>
  import { AutoMobilItems } from "./../store/store";

  let selected = Number(new URLSearchParams(window.location.search).get("index"));
  
</script>

<h2>Detail Automobilu</h2>

<table class="detail">
  <tr>
    <td>značka</td>
    <td>
      <span>{$AutoMobilItems[selected].brand}</span>
    </td>
  </tr>
  <tr>
    <td>model</td>
    <td>
      <span>{$AutoMobilItems[selected].model}</span>
    </td>
  </tr>
  <tr>
    <td>rok výroby</td>
    <td>
      <span>{$AutoMobilItems[selected].yearOfManufacture}</span>
    </td>
  </tr>
</table>

{#if $AutoMobilItems[selected].image}
  <div class="image-wrapper">
    <img
      class="image-auto"
      src={$AutoMobilItems[selected].image}
      alt="d"
    />
  </div>
{/if}

<style>
  table.detail {
    width: 100%;
    margin: auto;
    text-align: left;
    border: 1px solid;
  }

  table.detail tr td {
    border: 1px solid;
    padding: 4px;
  }

  table.detail tr td:first-child {
    width: 40%;
  }
  .image-wrapper {
    margin: 20px 0;
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .image-auto {
    height: 300px;
    width: 100%;
    object-fit: contain;
  }
</style>
