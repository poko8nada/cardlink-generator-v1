import { Card, CardBody, Tab, Tabs } from '@heroui/react'
import { Code } from '@heroui/react'
import { renderToStaticMarkup } from 'react-dom/server'

export default ({ children }: { children: React.ReactNode[] }) => {
  const html = renderToStaticMarkup(children[0])
  console.log(html)
  return (
    <div className='flex w-full flex-col'>
      {children && (
        <Tabs aria-label='Options'>
          <Tab key='photos' title='Photos'>
            <Card>
              <CardBody>{children[0]}</CardBody>
            </Card>
          </Tab>
          <Tab key='music' title='Music'>
            <Card>
              {/* <CardBody>{children[0]}</CardBody> */}
              <CardBody>
                {/* <Code>{html}</Code> */}
                {html}
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      )}
    </div>
  )
}
