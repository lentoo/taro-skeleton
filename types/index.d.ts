import { FC, ReactChildren } from 'react'
/**
 * @description Row 属性的宽高
 * @author lentoo
 * @date 2019-08-16
 * @export
 * @interface RowProps
 */
export interface RowProps {
  width: string | number
  height: string | number
}
export type AnimateName = 'blink' | 'elastic'
export type AvatarShapeOptions = 'round' | 'square'

/**
 * @description 骨架屏组件参数
 * @author lentoo
 * @date 2019-08-16
 * @export
 * @interface SkeletonProps
 */
export interface SkeletonProps {
  className?: string
  /**
   * @description 排列方向  横向 或者 纵向， 默认 row
   * @type {('row' | 'column')}
   * @memberof SkeletonProps
   */
  type?: 'row' | 'column'
  /**
   * @description 段落占位图行数
   * @type {number}
   */
  row?: number
  /**
   * @description 是否显示占位图，传 `false` 时会展示子组件内容
   * @type {boolean}
   */
  loading?: boolean
  /**
   * @description 是否显示标题占位图
   * @type {boolean}
   */
  title?: boolean
  /**
   * @description 标题占位图宽度
   * @type {(string | number)}
   */
  titleWidth?: string | number
  /**
   * @description 是否显示头像占位图
   * @type {boolean}
   */
  avatar?: boolean
  /**
   * @description avatar-size
   * @type {number}
   */
  avatarSize?: number
  /**
   * @description 头像占位图形状，可选值为 `square` 、`round` 默认值：round
   * @type {AvatarShapeOptions}
   */
  avatarShape?: AvatarShapeOptions
  /**
   * @description 是否显示右边操作按钮占位图
   * @type {boolean}
   */
  action?: boolean
  /**
   * @description 是否开启动画
   * @type {boolean}
   */
  animate?: boolean
  /**
   * @description 动画名称
   * @type {AnimateName}
   * @memberof SkeletonProps
   */
  animateName?: AnimateName
  /**
   * @description 段落占位图宽度，可传数组来设置每一行的宽度
   * @type {(number | string | (number | string)[])}
   */
  rowWidth?: number | string | (number | string)[]
  /**
   * @description 段落占位图高度，可传数组来设置每一行的高度
   * @type {(number | string | (number | string)[])}
   * @memberof SkeletonProps
   */
  rowHeight?: number | string | (number | string)[]
  /**
   * @description 用于定制 row 的宽跟高，可传数组来设置每一行的宽跟高，如果配置了该属性，则 rowWidth 配置无效
   * @type {(RowProps | RowProps[])}
   * @memberof SkeletonProps
   */
  rowProps?: RowProps | RowProps[]
  /**
   * @description 子组件内容
   * @type {JSX.Element}
   */
  /**
   * @description skeleton-content的对齐方式，默认center
   * @type {('left' | 'center' | 'right')}
   */
  contentAlignStyle?: 'left' | 'center' | 'right'

  /**
   * @description 自定义类名
   * @deprecated 废弃
   * @type String
   * @link http://taro-docs.jd.com/taro/docs/component-style
   */
  'skeleton-custom-class'?: string

  designWidth: number

  children?: JSX.Element
}

declare const Skeleton: FC<SkeletonProps>

export default Skeleton