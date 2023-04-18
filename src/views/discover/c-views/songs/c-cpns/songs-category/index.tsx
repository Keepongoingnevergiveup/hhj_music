import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { CategoryWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const SongsCategory: FC<IProps> = () => {
  return (
    <CategoryWrapper></CategoryWrapper>
  )
}

export default memo(SongsCategory)
