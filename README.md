# @tsci/vinjocarsales.xiao-series

Reusable [tscircuit](https://tscircuit.com) components for the Seeed Studio XIAO ESP32-S3 and ESP32-C3 module family.

## Installation

```sh
npm install @tsci/vinjocarsales.xiao-series
```

> This package is published to the tscircuit registry (`npm.tscircuit.com`). No extra registry config is needed when using the tscircuit eval engine or `tsci` CLI — they resolve `@tsci/` packages automatically.

## Usage

```tsx
import { XiaoEsp32S3Dip, XiaoEsp32S3Smd } from "@tsci/vinjocarsales.xiao-series";

export default () => (
  <board width="45mm" height="35mm">
    <XiaoEsp32S3Dip name="U1" />

    <led name="LED1" footprint="0805" />

    <trace from="U1.D0" to="LED1.anode" />
    <trace from="LED1.cathode" to="U1.GND" />
  </board>
);
```

## Components

- `XiaoEsp32S3Dip` — ESP32-S3 XIAO with 2.54mm through-hole DIP pads.
- `XiaoEsp32S3Smd` — ESP32-S3 XIAO with castellated SMD pads.
- `XiaoEsp32C3Dip` — ESP32-C3 XIAO with 2.54mm through-hole DIP pads (includes bundled STEP model).
- `XiaoEsp32C3Smd` — ESP32-C3 XIAO with castellated SMD pads (includes bundled STEP model).

Each component requires a `name` prop, extends `CommonLayoutProps`, and exports a matching hook:

```tsx
import { useXiaoEsp32S3Dip } from "@tsci/vinjocarsales.xiao-series";

const U1 = useXiaoEsp32S3Dip("U1");
```

## Pin Labels

### ESP32-S3

| Pin   | Label |
| ----- | ----- |
| pin1  | D0    |
| pin2  | D1    |
| pin3  | D2    |
| pin4  | D3    |
| pin5  | D4    |
| pin6  | D5    |
| pin7  | D6    |
| pin8  | D7    |
| pin9  | D8    |
| pin10 | D9    |
| pin11 | D10   |
| pin12 | 3V3   |
| pin13 | GND   |
| pin14 | VBUS  |

`3V3` and `VBUS` are marked as power pins. `GND` is marked as ground.

### ESP32-C3

| Pin   | Label |
| ----- | ----- |
| pin1  | D0    |
| pin2  | D1    |
| pin3  | D2    |
| pin4  | D3    |
| pin5  | D4    |
| pin6  | D5    |
| pin7  | D6    |
| pin8  | D7    |
| pin9  | D8    |
| pin10 | D9    |
| pin11 | D10   |
| pin12 | 3V3   |
| pin13 | GND   |
| pin14 | 5V    |

`3V3` and `5V` are marked as power pins. `GND` is marked as ground.

## Footprints

- DIP variants use two rows of seven plated through-holes at 2.54mm pitch, 17.78mm row spacing, 1.0mm drill / 1.8mm copper diameter.
- SMD variants use XIAO-compatible castellated side pads on the top layer.
- ESP32-C3 variants include a STEP 3D model (`assets/xiao-esp32-c3.step`).

## 3D Models

The ESP32-C3 DIP and SMD components include a bundled STEP model and apply it by default:

```tsx
<XiaoEsp32C3Smd name="U1" />
```

ESP32-S3 components do not include a bundled STEP model and will render only the PCB footprint by default. You can supply one via `cadModel`:

```tsx
<XiaoEsp32S3Dip
  name="U1"
  cadModel={{
    stepUrl: "https://example.com/xiao-esp32-s3.step",
    modelUnitToMmScale: 1,
    modelBoardNormalDirection: "z+",
    zOffsetFromSurface: "0mm",
    rotationOffset: { x: 0, y: 0, z: 0 },
    positionOffset: { x: 0, y: 0, z: 0 },
  }}
/>
```

## Examples

### Blink

```tsx
import { XiaoEsp32C3Dip } from "@tsci/vinjocarsales.xiao-series";

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
```

### Button

```tsx
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
```

### C3 with 3D model and LED

```tsx
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

    <pushbutton name="SW1" footprint="pushbutton_id1.3mm_od2mm" pcbX={18} pcbY={-8} />
    <resistor name="R1" resistance="330" footprint="axial_p2.54mm_id0.7mm_od1.4mm" pcbX={12} pcbY={-8} />

    <trace from="U1.D2" to="SW1.pin1" />
    <trace from="SW1.pin2" to="U1.GND" />
    <trace from="U1.D0" to="R1.pin1" />
    <trace from="R1.pin2" to="LED1.anode" />
    <trace from="LED1.cathode" to="U1.GND" />
  </board>
);
```

### Flashlight

```tsx
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
```
