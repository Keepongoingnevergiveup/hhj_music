import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { SongsWrapper } from './style'
import SongsHeader from './c-cpns/songs-header'
import SongsList from './c-cpns/songs-list'

interface IProps {
  children?: ReactNode
}

const Songs: FC<IProps> = () => {
  return (
    <SongsWrapper>
      <SongsHeader/>
      <SongsList/>
    </SongsWrapper>
  )
}

export default memo(Songs)
