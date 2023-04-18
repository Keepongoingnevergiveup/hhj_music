import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { HeaderLeft, HeaderWrapper } from '@/components/app-header/style'
import { HeaderRight } from './style'

interface IProps {
  children?: ReactNode
}

const SongsHeader: FC<IProps> = () => {
  return (
    <HeaderWrapper>
      <HeaderLeft>
        <span className="title"></span>
        <button className="select">
          <span>选择分类</span>``
          <i className="sprite_icon2"></i>
        </button>
      </HeaderLeft>
      <HeaderRight>
        <button className="hot">热门</button>
      </HeaderRight>
    </HeaderWrapper>
  )
}

export default memo(SongsHeader)
