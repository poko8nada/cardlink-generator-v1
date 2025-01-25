import { colorPalette } from '@/hooks/colorReducer'
import { Radio, RadioGroup, cn } from '@heroui/react'
import { Switch } from '@heroui/switch'
import { useColor, useSetColor } from './provider/colorProvider'

export default () => {
  // console.log('COLOR')
  const { color } = useColor()
  const setColor = useSetColor()

  return (
    <div className='flex flex-row justify-center items-center'>
      <RadioGroup
        orientation='horizontal'
        onValueChange={(value: string) => {
          setColor({ type: value })
        }}
        defaultValue='light'
        classNames={{ base: cn('ml-4 mt-1 md:mt-0 lg:ml-0') }}
      >
        {Object.keys(colorPalette).map(colorName => (
          <Radio key={colorName} value={colorName}>
            <span className='text-sm'>{colorName}</span>
          </Radio>
        ))}
      </RadioGroup>
      <Switch
        isSelected={color.isBorder}
        onValueChange={(isSelected: boolean) => {
          setColor({ type: isSelected.toString() })
        }}
        classNames={{ base: cn('ml-4 mt-1 md:mt-0') }}
        size='sm'
      >
        <span className='text-sm'>border on-off</span>
      </Switch>
    </div>
  )
}
