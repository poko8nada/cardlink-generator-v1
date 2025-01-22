import { colorTypes } from '@/lib/colorReducer'
import { Radio, RadioGroup, cn } from '@heroui/react'
import { Switch } from '@heroui/switch'

type Action = {
  type: string
}
export default ({
  setColor,
}: {
  setColor: React.Dispatch<Action>
}) => {
  // console.log('COLOR')

  return (
    <div
      className={
        'flex flex-col justify-center items-center gap-1 sm:flex-row sm:gap-3'
      }
    >
      <RadioGroup
        orientation='horizontal'
        onValueChange={(value: string) => {
          setColor({ type: value })
        }}
        defaultValue='light'
        classNames={{
          base: cn('min-w-[14rem]'),
        }}
      >
        {Object.keys(colorTypes).map(colorName => (
          <Radio
            key={colorName}
            value={colorName}
            classNames={{
              base: cn(
                'inline-flex m-0 bg-content2 hover:bg-content3 items-center justify-between',
                'max-w-[100px] w-full cursor-pointer rounded-lg gap-3 p-3 border-2 border-transparent',
                'data-[selected=true]:border-primary',
              ),
            }}
          >
            {colorName}
          </Radio>
        ))}
      </RadioGroup>
      <Switch
        classNames={{
          base: cn(
            'inline-flex flex-row-reverse max-w-sm bg-content2 hover:bg-content3 items-center',
            'justify-between cursor-pointer rounded-lg gap-2 p-3 border-2 border-transparent',
            'data-[selected=true]:border-primary m-2',
          ),
          wrapper: 'p-0 h-4 overflow-visible',
          thumb: cn(
            'w-6 h-6 border-2 shadow-lg',
            'group-data-[hover=true]:border-primary',
            //selected
            'group-data-[selected=true]:ms-6',
            // pressed
            'group-data-[pressed=true]:w-7',
            'group-data-[selected]:group-data-[pressed]:ms-4',
          ),
        }}
      >
        <div className='flex flex-col gap-1'>
          <p className=''>border on-off</p>
        </div>
      </Switch>
    </div>
  )
}
