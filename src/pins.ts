import type { PinAttributeMap, SchematicPortArrangement } from "@tscircuit/props"

export const xiaoEsp32S3PinLabels = {
  pin1: "D0",
  pin2: "D1",
  pin3: "D2",
  pin4: "D3",
  pin5: "D4",
  pin6: "D5",
  pin7: "D6",
  pin8: "D7",
  pin9: "D8",
  pin10: "D9",
  pin11: "D10",
  pin12: "3V3",
  pin13: "GND",
  pin14: "VBUS",
} as const

export const xiaoEsp32C3PinLabels = {
  pin1: "D0",
  pin2: "D1",
  pin3: "D2",
  pin4: "D3",
  pin5: "D4",
  pin6: "D5",
  pin7: "D6",
  pin8: "D7",
  pin9: "D8",
  pin10: "D9",
  pin11: "D10",
  pin12: "3V3",
  pin13: "GND",
  pin14: "5V",
} as const

export const xiaoEsp32S3HookPins = {
  pin1: ["D0"],
  pin2: ["D1"],
  pin3: ["D2"],
  pin4: ["D3"],
  pin5: ["D4"],
  pin6: ["D5"],
  pin7: ["D6"],
  pin8: ["D7"],
  pin9: ["D8"],
  pin10: ["D9"],
  pin11: ["D10"],
  pin12: ["3V3"],
  pin13: ["GND"],
  pin14: ["VBUS"],
} as const

export const xiaoEsp32C3HookPins = {
  pin1: ["D0"],
  pin2: ["D1"],
  pin3: ["D2"],
  pin4: ["D3"],
  pin5: ["D4"],
  pin6: ["D5"],
  pin7: ["D6"],
  pin8: ["D7"],
  pin9: ["D8"],
  pin10: ["D9"],
  pin11: ["D10"],
  pin12: ["3V3"],
  pin13: ["GND"],
  pin14: ["5V"],
} as const

export const xiaoEsp32S3PinAttributes = {
  "3V3": {
    providesPower: true,
    providesVoltage: "3.3V",
    includeInBoardPinout: true,
  },
  GND: {
    providesGround: true,
    includeInBoardPinout: true,
  },
  VBUS: {
    providesPower: true,
    providesVoltage: "5V",
    includeInBoardPinout: true,
  },
} satisfies Record<string, PinAttributeMap>

export const xiaoEsp32C3PinAttributes = {
  "3V3": {
    providesPower: true,
    providesVoltage: "3.3V",
    includeInBoardPinout: true,
  },
  GND: {
    providesGround: true,
    includeInBoardPinout: true,
  },
  "5V": {
    providesPower: true,
    providesVoltage: "5V",
    includeInBoardPinout: true,
  },
} satisfies Record<string, PinAttributeMap>

export const xiaoSchPinArrangement = {
  leftSide: {
    direction: "top-to-bottom",
    pins: ["D0", "D1", "D2", "D3", "D4", "D5", "D6"],
  },
  rightSide: {
    direction: "bottom-to-top",
    pins: ["D7", "D8", "D9", "D10", "3V3", "GND", "VBUS"],
  },
} satisfies SchematicPortArrangement

export const xiaoEsp32C3SchPinArrangement = {
  leftSide: {
    direction: "top-to-bottom",
    pins: ["D0", "D1", "D2", "D3", "D4", "D5", "D6"],
  },
  rightSide: {
    direction: "bottom-to-top",
    pins: ["D7", "D8", "D9", "D10", "3V3", "GND", "5V"],
  },
} satisfies SchematicPortArrangement
