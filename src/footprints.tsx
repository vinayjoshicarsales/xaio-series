type XiaoPad = {
  readonly pin: string;
  readonly label: string;
  readonly x: number;
  readonly y: number;
  readonly width?: number;
  readonly height?: number;
  readonly shape?: "rect" | "circle" | "rotated_rect";
  readonly cornerRadius?: number;
  readonly radius?: number;
  readonly ccwRotation?: number;
};

const xiaoDipPads = [
  { pin: "pin1", label: "D0", x: -7.62, y: 7.6835 },
  { pin: "pin2", label: "D1", x: -7.62, y: 5.1435 },
  { pin: "pin3", label: "D2", x: -7.62, y: 2.6035 },
  { pin: "pin4", label: "D3", x: -7.62, y: 0.0635 },
  { pin: "pin5", label: "D4", x: -7.62, y: -2.4765 },
  { pin: "pin6", label: "D5", x: -7.62, y: -5.0165 },
  { pin: "pin7", label: "D6", x: -7.62, y: -7.5565 },
  { pin: "pin8", label: "D7", x: 7.62, y: -7.5565 },
  { pin: "pin9", label: "D8", x: 7.62, y: -5.0165 },
  { pin: "pin10", label: "D9", x: 7.62, y: -2.4765 },
  { pin: "pin11", label: "D10", x: 7.62, y: 0.0635 },
  { pin: "pin12", label: "3V3", x: 7.62, y: 2.6035 },
  { pin: "pin13", label: "GND", x: 7.62, y: 5.1435 },
  { pin: "pin14", label: "VBUS", x: 7.62, y: 7.6835 },
] as const satisfies readonly XiaoPad[];

const xiaoEsp32C3DipPads = xiaoDipPads.map((pad) =>
  pad.pin === "pin14" ? { ...pad, label: "5V" } : pad,
);

const xiaoEsp32C3SmdPads: readonly XiaoPad[] = [
  {
    pin: "pin1",
    label: "D0",
    x: -8.0825,
    y: 7.62,
    width: 2.75,
    height: 2,
    shape: "rect",
    cornerRadius: 0.5,
  },
  {
    pin: "pin2",
    label: "D1",
    x: -8.0825,
    y: 5.08,
    width: 2.75,
    height: 2,
    shape: "rect",
    cornerRadius: 0.5,
  },
  {
    pin: "pin3",
    label: "D2",
    x: -8.0825,
    y: 2.54,
    width: 2.75,
    height: 2,
    shape: "rect",
    cornerRadius: 0.5,
  },
  {
    pin: "pin4",
    label: "D3",
    x: -8.0825,
    y: 0,
    width: 2.75,
    height: 2,
    shape: "rect",
    cornerRadius: 0.5,
  },
  {
    pin: "pin5",
    label: "D4",
    x: -8.0825,
    y: -2.54,
    width: 2.75,
    height: 2,
    shape: "rect",
    cornerRadius: 0.5,
  },
  {
    pin: "pin6",
    label: "D5",
    x: -8.0825,
    y: -5.08,
    width: 2.75,
    height: 2,
    shape: "rect",
    cornerRadius: 0.5,
  },
  {
    pin: "pin7",
    label: "D6",
    x: -8.0825,
    y: -7.62,
    width: 2.75,
    height: 2,
    shape: "rect",
    cornerRadius: 0.5,
  },
  {
    pin: "pin8",
    label: "D7",
    x: 8.0825,
    y: -7.62,
    width: 2.75,
    height: 2,
    shape: "rect",
    cornerRadius: 0.5,
  },
  {
    pin: "pin9",
    label: "D8",
    x: 8.0825,
    y: -5.08,
    width: 2.75,
    height: 2,
    shape: "rect",
    cornerRadius: 0.5,
  },
  {
    pin: "pin10",
    label: "D9",
    x: 8.0825,
    y: -2.54,
    width: 2.75,
    height: 2,
    shape: "rect",
    cornerRadius: 0.5,
  },
  {
    pin: "pin11",
    label: "D10",
    x: 8.0825,
    y: 0,
    width: 2.75,
    height: 2,
    shape: "rect",
    cornerRadius: 0.5,
  },
  {
    pin: "pin12",
    label: "3V3",
    x: 8.0825,
    y: 2.54,
    width: 2.75,
    height: 2,
    shape: "rect",
    cornerRadius: 0.5,
  },
  {
    pin: "pin13",
    label: "GND",
    x: 8.0825,
    y: 5.08,
    width: 2.75,
    height: 2,
    shape: "rect",
    cornerRadius: 0.5,
  },
  {
    pin: "pin14",
    label: "5V",
    x: 8.0825,
    y: 7.62,
    width: 2.75,
    height: 2,
    shape: "rect",
    cornerRadius: 0.5,
  },
  {
    pin: "pin15",
    label: "TP15",
    x: -1.2975,
    y: 8.632,
    width: 1.7,
    height: 1.7,
    shape: "circle",
  },
  {
    pin: "pin16",
    label: "TP16",
    x: 1.2425,
    y: 8.632,
    width: 1.7,
    height: 1.7,
    shape: "circle",
  },
  {
    pin: "pin17",
    label: "TP17",
    x: -1.2975,
    y: 6.092,
    width: 1.7,
    height: 1.7,
    shape: "circle",
  },
  {
    pin: "pin18",
    label: "TP18",
    x: 1.2425,
    y: 6.092,
    width: 1.7,
    height: 1.7,
    shape: "circle",
  },
  {
    pin: "pin19",
    label: "TP19",
    x: -1.2975,
    y: 3.552,
    width: 1.7,
    height: 1.7,
    shape: "circle",
  },
  {
    pin: "pin20",
    label: "TP20",
    x: 1.2425,
    y: 3.552,
    width: 1.7,
    height: 1.7,
    shape: "circle",
  },
  {
    pin: "pin21",
    label: "TP21",
    x: -4.4725,
    y: 0.382,
    width: 2.5,
    height: 1.1,
    shape: "rect",
    cornerRadius: 0.275,
  },
  {
    pin: "pin22",
    label: "TP22",
    x: -4.4725,
    y: 2.287,
    width: 2.5,
    height: 1.1,
    shape: "rect",
    cornerRadius: 0.275,
  },
];

const outlineRoute = [
  { x: -10.55, y: 8.9 },
  { x: 10.55, y: 8.9 },
  { x: 10.55, y: -8.9 },
  { x: -10.55, y: -8.9 },
  { x: -10.55, y: 8.9 },
];

const usbEdgeRoute = [
  { x: -3.8, y: 8.9 },
  { x: -3.8, y: 7.4 },
  { x: 3.8, y: 7.4 },
  { x: 3.8, y: 8.9 },
];

const pin1MarkerRoute = [
  { x: -7.2, y: 8.7 },
  { x: -6.4, y: 8.7 },
  { x: -6.4, y: 7.9 },
  { x: -7.2, y: 7.9 },
  { x: -7.2, y: 8.7 },
];

const renderSilkscreen = () => (
  <>
    <silkscreenpath route={outlineRoute} />
    <silkscreenpath route={usbEdgeRoute} />
    <silkscreenpath route={pin1MarkerRoute} />
  </>
);

const renderDipPads = (pads: readonly XiaoPad[]) =>
  pads.map(({ pin, label, x, y }) => (
    <platedhole
      pcbX={`${x}mm`}
      pcbY={`${y}mm`}
      shape="circle"
      holeDiameter="1mm"
      outerDiameter="1.8mm"
      portHints={[pin, label]}
    />
  ));

const renderSmdPads = (pads: readonly XiaoPad[]) =>
  pads.map(
    ({
      pin,
      label,
      x,
      y,
      width = 2.75,
      height = 2,
      shape = "rect",
      cornerRadius,
      radius,
    }) =>
      shape === "circle" ? (
        <smtpad
          pcbX={`${x}mm`}
          pcbY={`${y}mm`}
          layer="top"
          shape="circle"
          radius={`${radius ?? width / 2}mm`}
          portHints={[pin, label]}
        />
      ) : (
        <smtpad
          pcbX={`${x}mm`}
          pcbY={`${y}mm`}
          layer="top"
          shape="rect"
          width={`${width}mm`}
          height={`${height}mm`}
          cornerRadius={cornerRadius ? `${cornerRadius}mm` : undefined}
          portHints={[pin, label]}
        />
      ),
  );

export const xiaoEsp32S3DipFootprint = (
  <footprint>
    {renderDipPads(xiaoDipPads)}
    {renderSilkscreen()}
  </footprint>
);

export const xiaoEsp32C3DipFootprint = (
  <footprint>
    {renderDipPads(xiaoEsp32C3DipPads)}
    {renderSilkscreen()}
  </footprint>
);

export const xiaoEsp32S3SmdFootprint = (
  <footprint>
    {renderSmdPads(xiaoDipPads)}
    {renderSilkscreen()}
  </footprint>
);

export const xiaoEsp32C3SmdFootprint = (
  <footprint>
    {renderSmdPads(xiaoEsp32C3SmdPads)}
    {renderSilkscreen()}
  </footprint>
);
