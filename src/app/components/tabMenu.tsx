import { Card, Tab, Tabs } from '@heroui/react'
import { Snippet } from '@heroui/snippet'
import { renderToStaticMarkup } from 'react-dom/server'

export default ({ children }: { children: React.ReactNode }) => {
  // console.log('TAB')

  const html = renderToStaticMarkup(children)

  return (
    <div className='mt-6'>
      {children && (
        <Tabs aria-label='Options'>
          <Tab key='preview' title='Preview'>
            <div className='w-full overflow-x-scroll p-6 bg-foreground-500 rounded-lg'>
              {children}
            </div>
          </Tab>
          <Tab key='code' title='Code'>
            <Card>
              <Snippet
                symbol=''
                onCopy={() => navigator.clipboard.writeText(html)}
                className='w-full'
              >
                {html}
              </Snippet>
            </Card>
          </Tab>
        </Tabs>
      )}
    </div>
  )
}
