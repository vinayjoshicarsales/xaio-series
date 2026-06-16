import { createUseComponent } from "@tscircuit/core"
import type { CadModelProp, CommonLayoutProps } from "@tscircuit/props"
import { xiaoEsp32C3CadModel } from "./cadModels"
import { xiaoEsp32C3DipFootprint } from "./footprints"
import {
  xiaoEsp32C3HookPins,
  xiaoEsp32C3PinAttributes,
  xiaoEsp32C3PinLabels,
  xiaoEsp32C3SchPinArrangement,
} from "./pins"

export interface XiaoEsp32C3DipProps extends CommonLayoutProps {
  name: string
  cadModel?: CadModelProp
}

export const XiaoEsp32C3Dip = (props: XiaoEsp32C3DipProps) => (
  <chip
    footprint={xiaoEsp32C3DipFootprint}
    pinLabels={xiaoEsp32C3PinLabels}
    pinAttributes={xiaoEsp32C3PinAttributes}
    schPinArrangement={xiaoEsp32C3SchPinArrangement}
    schWidth="11mm"
    schHeight="22mm"
    cadModel={xiaoEsp32C3CadModel}
    {...props}
  />
)

export const useXiaoEsp32C3Dip = createUseComponent(
  XiaoEsp32C3Dip,
  xiaoEsp32C3HookPins,
)
