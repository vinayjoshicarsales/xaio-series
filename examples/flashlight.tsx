import { XiaoEsp32S3Smd } from "@tsci/vinjocarsales.xiao-series";

export default () => (
  <board width="55mm" height="32mm">
    <XiaoEsp32S3Smd name="U1" pcbX={-10} pcbY={0} />

    <led name="LED1" footprint="0805" pcbX={18} pcbY={3} color="white" />

    <resistor name="R1" footprint="0805" resistance="150" pcbX={18} pcbY={-4} />

    <trace from="U1.D10" to="R1.pin1" />
    <trace from="R1.pin2" to="LED1.anode" />
    <trace from="LED1.cathode" to="U1.GND" />
  </board>
);
