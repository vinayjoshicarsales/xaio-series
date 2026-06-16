import { createUseComponent } from "@tscircuit/core"
import type { CommonLayoutProps } from "@tscircuit/props"
import { xiaoEsp32S3DipFootprint } from "./footprints"
import {
  xiaoEsp32S3HookPins,
  xiaoEsp32S3PinAttributes,
  xiaoEsp32S3PinLabels,
  xiaoSchPinArrangement,
} from "./pins"

export interface XiaoEsp32S3DipProps extends CommonLayoutProps {
  name: string
}

export const XiaoEsp32S3Dip = (props: XiaoEsp32S3DipProps) => (
  <chip
    footprint={xiaoEsp32S3DipFootprint}
    pinLabels={xiaoEsp32S3PinLabels}
    pinAttributes={xiaoEsp32S3PinAttributes}
    schPinArrangement={xiaoSchPinArrangement}
    schWidth="11mm"
    schHeight="22mm"
    {...props}
  />
)

export const useXiaoEsp32S3Dip = createUseComponent(
  XiaoEsp32S3Dip,
  xiaoEsp32S3HookPins,
)
