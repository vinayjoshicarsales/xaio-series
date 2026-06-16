import type { CadModelProp } from "@tscircuit/props";
const xiaoEsp32C3StepUrl = "https://unpkg.com/@vinjocarsales/xiao-series/assets/xiao-esp32-c3.step";

export const xiaoEsp32C3CadModel = {
  stepUrl: xiaoEsp32C3StepUrl,
  modelUnitToMmScale: 1,
  modelBoardNormalDirection: "z+",
  zOffsetFromSurface: "0mm",
  rotationOffset: { x: 90, y: 90, z: 0 },
  positionOffset: { x: 6, y: -2, z: 0 },
} satisfies CadModelProp;
