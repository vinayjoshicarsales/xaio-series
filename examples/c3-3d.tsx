import { XiaoEsp32C3Dip } from "@tsci/vinjocarsales.xiao-series";

export default () => (
  <board width="50mm" height="35mm">
    <XiaoEsp32C3Dip name="U1" pcbX={-6} pcbY={0} />

    <led
      name="LED1"
      footprint="kicad:LED_THT/LED_D5.0mm_Clear"
      pcbX={16}
      pcbY={6}
      color="red"
      cadModel={{
        stepUrl:
          "https://raw.githubusercontent.com/KiCad/kicad-packages3D/master/LED_THT.3dshapes/LED_D3.0mm.step",
        modelUnitToMmScale: 1,
        modelBoardNormalDirection: "z+",
        zOffsetFromSurface: "0mm",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: -1.2, y: 0, z: -2 },
      }}
    />

    <pushbutton
      name="SW1"
      footprint="pushbutton_id1.3mm_od2mm"
      pcbX={18}
      pcbY={-8}
    />
    <resistor
      name="R1"
      resistance="330"
      footprint="axial_p2.54mm_id0.7mm_od1.4mm"
      pcbX={12}
      pcbY={-8}
    />

    <trace from="U1.D2" to="SW1.pin1" />
    <trace from="SW1.pin2" to="U1.GND" />
    <trace from="U1.D0" to="R1.pin1" />
    <trace from="R1.pin2" to="LED1.anode" />
    <trace from="LED1.cathode" to="U1.GND" />
  </board>
);
