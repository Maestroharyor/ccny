import { mdiClose } from '@mdi/js'
import { ReactNode } from 'react'
import type { ColorButtonKey } from '../../interfaces'
import Button from '../Button'
import Buttons from '../Buttons'
import CardBox from '.'
import CardBoxComponentTitle from './Component/Title'
import OverlayLayer from '../OverlayLayer'

type Props = {
  title: string
  buttonColor: ColorButtonKey
  buttonLabel?: string
  hideCancelButton?: boolean
  isActive: boolean
  children: ReactNode
  onConfirm: () => void
  onCancel?: () => void
}

const CardBoxModal = ({
  title,
  buttonColor,
  buttonLabel,
  hideCancelButton,
  isActive,
  children,
  onConfirm,
  onCancel,
}: Props) => {
  if (!isActive) {
    return null
  }

  const footer = (
    <Buttons>
      <Button label={buttonLabel} color={buttonColor} onClick={onConfirm} />
      {!!onCancel && !hideCancelButton && (
        <Button label="Cancel" color={buttonColor} outline onClick={onCancel} />
      )}
    </Buttons>
  )

  return (
    <OverlayLayer onClick={onCancel} className={onCancel ? 'cursor-pointer' : ''}>
      <CardBox
        className={`transition-transform shadow-lg w-screen md:w-4/6 h-fit z-50`}
        isModal
        footer={footer}
      >
        <CardBoxComponentTitle title={title}>
          {!!onCancel && (
            <Button icon={mdiClose} color="whiteDark" onClick={onCancel} small roundedFull />
          )}
        </CardBoxComponentTitle>

        <div className="space-y-3 overflow-y-auto">{children}</div>
      </CardBox>
    </OverlayLayer>
  )
}

export default CardBoxModal
