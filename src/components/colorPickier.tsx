import CustomTooltip from '@/components/CustomTooltip'
import { colorPalette } from '@/hooks/colorReducer'
import { Radio, RadioGroup, cn } from '@heroui/react'
import { Switch } from '@heroui/switch'
import {
  useBorder,
  useSetColor,
  useSetIsBorder,
} from './provider/colorProvider'

export default () => {
  // console.log('COLOR')
  const setColor = useSetColor()
  const { isBorder } = useBorder()
  const setIsBorder = useSetIsBorder()
  return (
    <div>
      <div className='flex flex-row justify-center items-center'>
        <CustomTooltip>
          <RadioGroup
            orientation='horizontal'
            onValueChange={(value: string) => {
              setColor({ type: value })
            }}
            defaultValue='light'
            classNames={{ base: cn('ml-4 mt-1 md:mt-0 lg:ml-0') }}
            id='color_radio'
          >
            {Object.keys(colorPalette).map(colorName => (
              <Radio key={colorName} value={colorName}>
                <span className='text-sm'>{colorName}</span>
              </Radio>
            ))}
          </RadioGroup>
        </CustomTooltip>
        <CustomTooltip>
          <Switch
            isSelected={isBorder}
            onValueChange={() => {
              setIsBorder(!isBorder)
            }}
            classNames={{ base: cn('ml-4 mt-1') }}
            size='sm'
            id='isBorder'
          >
            <span className='text-sm'>border on-off</span>
          </Switch>
        </CustomTooltip>
      </div>
    </div>
  )
}
