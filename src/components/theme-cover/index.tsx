import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { ThemeCoverWrapper } from './style'
import { formatCount, getImageSize } from '@/utils/format'

interface IProps {
  children?: ReactNode
  info: any
}

const ThemeCover: FC<IProps> = (props) => {
  const { info } = props

  return(
    <ThemeCoverWrapper>
      <div className="cover-top">
        <img src={getImageSize(info.picUrl || info.coverImgUrl, 140)} alt="" />
        <div className="cover sprite_cover">
          <div className="info sprite_cover">
            <span>
              <i className="sprite_icon erji"></i>
              {formatCount(info.playCount)}
            </span>
            <i className="sprite_icon play"></i>
          </div>
        </div>
      </div>
      <div className="cover_bottom text-nowrap">
        {info.name}
      </div>
    </ThemeCoverWrapper>
  )
}

export default memo(ThemeCover)
