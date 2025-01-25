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
            <div
              className='w-full overflow-x-scroll p-6 rounded-lg bg-[#3f3f4666;]'
              // style={{
              //   backgroundImage:
              //     'radial-gradient(rgba(235, 235, 235, 1), rgba(138, 138, 138, 1))',
              // }}
            >
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
