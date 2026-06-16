import { createUseComponent } from "@tscircuit/core"
import type { CommonLayoutProps } from "@tscircuit/props"
import { xiaoEsp32S3SmdFootprint } from "./footprints"
import {
  xiaoEsp32S3HookPins,
  xiaoEsp32S3PinAttributes,
  xiaoEsp32S3PinLabels,
  xiaoSchPinArrangement,
} from "./pins"

export interface XiaoEsp32S3SmdProps extends CommonLayoutProps {
  name: string
}

export const XiaoEsp32S3Smd = (props: XiaoEsp32S3SmdProps) => (
  <chip
    footprint={xiaoEsp32S3SmdFootprint}
    pinLabels={xiaoEsp32S3PinLabels}
    pinAttributes={xiaoEsp32S3PinAttributes}
    schPinArrangement={xiaoSchPinArrangement}
    schWidth="11mm"
    schHeight="22mm"
    {...props}
  />
)

export const useXiaoEsp32S3Smd = createUseComponent(
  XiaoEsp32S3Smd,
  xiaoEsp32S3HookPins,
)
