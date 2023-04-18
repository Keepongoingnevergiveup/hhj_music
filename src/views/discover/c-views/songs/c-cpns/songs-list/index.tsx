import React, { memo} from 'react'
import type { FC, ReactNode } from 'react'
import { ListWrapper } from './style'
import HJPagination from '@/components/pagination'
import { useAppSelector } from '@/store'
import ThemeCover from '@/components/theme-cover'
import { shallowEqual } from 'react-redux'



interface IProps {
  children?: ReactNode
}


const SongsList: FC<IProps> = () => {

  const { categorySongs } = useAppSelector((state) => ({
    categorySongs: state.getIn(["songs", "categorySongs"])
  }), shallowEqual);
  const songList = categorySongs.playlists || [];

  return (
    <ListWrapper>
      <div className="songs-list">
      {
          songList.map((item:any, index:any) => {
            return (
              <ThemeCover info={item} key={item.id} />
            )
          })
        }
      </div>
      <HJPagination/>
    </ListWrapper>
  )
}

export default memo(SongsList)
