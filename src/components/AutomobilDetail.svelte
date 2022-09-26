<script>
  import { AutoMobilItems, selectedAuto } from "./../store/store";

  let detailAutomobilu = $AutoMobilItems[$selectedAuto.selected];
</script>

<h2>Detail Automobilu</h2>

<table class="detail">
  <tr>
    <td>značka</td>
    <td>
      <span>{detailAutomobilu.brand}</span>
    </td>
  </tr>
  <tr>
    <td>model</td>
    <td>
      <span>{detailAutomobilu.model}</span>
    </td>
  </tr>
  <tr>
    <td>rok výroby</td>
    <td>
      <span>{detailAutomobilu.yearOfManufacture}</span>
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
</style>
