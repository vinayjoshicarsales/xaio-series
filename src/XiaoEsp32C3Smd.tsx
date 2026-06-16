import { createUseComponent } from "@tscircuit/core"
import type { CadModelProp, CommonLayoutProps } from "@tscircuit/props"
import { xiaoEsp32C3CadModel } from "./cadModels"
import { xiaoEsp32C3SmdFootprint } from "./footprints"
import {
  xiaoEsp32C3HookPins,
  xiaoEsp32C3PinAttributes,
  xiaoEsp32C3PinLabels,
  xiaoEsp32C3SchPinArrangement,
} from "./pins"

export interface XiaoEsp32C3SmdProps extends CommonLayoutProps {
  name: string
  cadModel?: CadModelProp
}

export const XiaoEsp32C3Smd = (props: XiaoEsp32C3SmdProps) => (
  <chip
    footprint={xiaoEsp32C3SmdFootprint}
    pinLabels={xiaoEsp32C3PinLabels}
    pinAttributes={xiaoEsp32C3PinAttributes}
    schPinArrangement={xiaoEsp32C3SchPinArrangement}
    schWidth="11mm"
    schHeight="22mm"
    cadModel={xiaoEsp32C3CadModel}
    {...props}
  />
)

export const useXiaoEsp32C3Smd = createUseComponent(
  XiaoEsp32C3Smd,
  xiaoEsp32C3HookPins,
)
