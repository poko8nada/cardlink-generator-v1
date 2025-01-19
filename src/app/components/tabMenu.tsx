import { Card, CardBody, Tab, Tabs } from '@heroui/react'
import { Snippet } from '@heroui/snippet'
import { renderToStaticMarkup } from 'react-dom/server'

export default ({ children }: { children: React.ReactNode }) => {
  const html = renderToStaticMarkup(children)
  console.log(html)
  return (
    <div className='w-full max-w-[40rem] mx-auto'>
      {children && (
        <Tabs aria-label='Options'>
          <Tab key='preview' title='Preview'>
            <Card>
              <CardBody className='flex justify-center items-center py-6 bg-foreground-200'>
                {children}
              </CardBody>
            </Card>
          </Tab>
          <Tab key='code' title='Code'>
            <Card>
              {/* <CardBody> */}
              <Snippet
                symbol=''
                onCopy={() => navigator.clipboard.writeText(html)}
                className='w-full'
              >
                {html}
              </Snippet>
              {/* </CardBody> */}
            </Card>
          </Tab>
        </Tabs>
      )}
    </div>
  )
}
