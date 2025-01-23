import { colorTypes } from '@/lib/colorReducer'
import { Radio, RadioGroup, cn } from '@heroui/react'
import { Switch } from '@heroui/switch'

type Action = {
  type: string
}
export default ({
  setColor,
  isBorder,
  setIsBorder,
}: {
  setColor: React.Dispatch<Action>
  isBorder: boolean
  setIsBorder: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  // console.log('COLOR')

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
        {Object.keys(colorTypes).map(colorName => (
          <Radio key={colorName} value={colorName}>
            <span className='text-sm'>{colorName}</span>
          </Radio>
        ))}
      </RadioGroup>
      <Switch
        isSelected={isBorder}
        onValueChange={setIsBorder}
        classNames={{ base: cn('ml-4 mt-1 md:mt-0') }}
        size='sm'
      >
        <span className='text-sm'>border on-off</span>
      </Switch>
    </div>
  )
}
