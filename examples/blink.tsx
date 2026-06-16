import { XiaoEsp32C3Dip, XiaoEsp32S3Dip } from "@vinjocarsales/xiao-series";

export default () => (
  <board width="45mm" height="35mm">
    <XiaoEsp32C3Dip
      name="U1"
      cadModel={{
        stepUrl: "https://example.com/xiao-esp32-c3.step",
        zOffsetFromSurface: "0mm",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: 0, z: 0 },
      }}
    />

    <led name="LED1" footprint="0805" pcbX={16} pcbY={4} color="red" />

    <resistor name="R1" footprint="0805" resistance="330" pcbX={16} pcbY={-4} />

    <trace from="U1.D0" to="R1.pin1" />
    <trace from="R1.pin2" to="LED1.anode" />
    <trace from="LED1.cathode" to="U1.GND" />
  </board>
);
