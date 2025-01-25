import { CheckList, CheckListItem } from '@/components/CheckList'
import { Card, CardBody } from '@heroui/react'

export default () => {
  return (
    <Card className='mx-auto w-full max-w-3xl'>
      <CardBody className='p-5 lg:p-10'>
        <h2 className='text-xl md:text-3xl font-bold mb-8 text-center'>
          カードタイプのリンクジェネレーター
        </h2>
        <CheckList>
          <CheckListItem>
            入力したURLのOGP情報をもとにカードが作成されます。
          </CheckListItem>
          <CheckListItem>
            生成されたリンクは「デザイン」✕「テーマカラー」✕「ボーダーの有無」を組み合わせることができます。
          </CheckListItem>
          <CheckListItem>
            codeタブをクリックして、
            <svg
              aria-hidden='true'
              fill='none'
              focusable='false'
              height='1em'
              role='presentation'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='1.5'
              viewBox='0 0 24 24'
              width='1em'
              className='text-inherit opacity-100 scale-100 inline-block mx-1'
            >
              <path d='M16 17.1c0 3.5-1.4 4.9-4.9 4.9H6.9C3.4 22 2 20.6 2 17.1v-4.2C2 9.4 3.4 8 6.9 8h4.2c3.5 0 4.9 1.4 4.9 4.9Z' />
              <path d='M8 8V6.9C8 3.4 9.4 2 12.9 2h4.2C20.6 2 22 3.4 22 6.9v4.2c0 3.5-1.4 4.9-4.9 4.9H16' />
              <path d='M16 12.9C16 9.4 14.6 8 11.1 8' />
            </svg>
            をクリックすると、コードをコピーできます。
          </CheckListItem>
          <CheckListItem>
            CSSはインラインに展開しています。ホバー等はご自由に設定してご利用ください。
          </CheckListItem>
        </CheckList>
      </CardBody>
    </Card>
  )
}
