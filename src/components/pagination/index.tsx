import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const HJPagination: FC<IProps> = () => {
  return <div>Pagination</div>
}

export default memo(HJPagination)
