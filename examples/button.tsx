import { XiaoEsp32C3Dip } from "@tsci/vinjocarsales.xiao-series";

export default () => (
  <board width="50mm" height="35mm">
    <XiaoEsp32C3Dip name="U1" pcbX={-6} pcbY={0} />

    <pushbutton
      name="SW1"
      footprint="pushbutton_id1.3mm_od2mm"
      pcbX={17}
      pcbY={0}
    />

    <trace from="U1.D2" to="SW1.pin1" />
    <trace from="SW1.pin2" to="U1.GND" />
  </board>
);
