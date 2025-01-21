import { type Color, colorTypes } from '@/lib/colorReducer'
import { Radio, RadioGroup } from '@heroui/react'
import { div } from 'framer-motion/client'

type Action = {
  type: string
}
export default ({
  setColor,
}: {
  setColor: React.Dispatch<Action>
}) => {
  console.log('COLOR')

  return (
    <div className='flex justify-center'>
      <RadioGroup
        label='色を選択できます'
        orientation='horizontal'
        onValueChange={(value: string) => setColor({ type: value })}
        defaultValue='light'
      >
        {Object.keys(colorTypes).map(colorName => (
          <Radio key={colorName} value={colorName}>
            {colorName}
          </Radio>
        ))}
      </RadioGroup>
    </div>
  )
}
