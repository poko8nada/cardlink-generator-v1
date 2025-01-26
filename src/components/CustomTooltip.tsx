import { Tooltip } from '@heroui/react'
const CustomTooltip = ({ children }: { children: React.ReactNode }) => {
  return (
    <Tooltip
      content='クリック後、数秒かかります'
      delay={100}
      closeDelay={100}
      placement='bottom'
      showArrow={true}
      color='foreground'
    >
      {children}
    </Tooltip>
  )
}

export default CustomTooltip
