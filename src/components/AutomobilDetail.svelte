<script>
  import { AutoMobilItems, selectedAuto } from "./../store/store";
</script>

<h2>Detail Automobilu</h2>

<table class="detail">
  <tr>
    <td>značka</td>
    <td>
      <span>{$AutoMobilItems[$selectedAuto.selected].brand}</span>
    </td>
  </tr>
  <tr>
    <td>model</td>
    <td>
      <span>{$AutoMobilItems[$selectedAuto.selected].model}</span>
    </td>
  </tr>
  <tr>
    <td>rok výroby</td>
    <td>
      <span>{$AutoMobilItems[$selectedAuto.selected].yearOfManufacture}</span>
    </td>
  </tr>
</table>

<style>
  table.detail {
    width: 80%;
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
</style>
