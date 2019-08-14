import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import classnames from 'classnames'
import './index.scss'


export type SkeletonProps = {
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
   * @type {avatarShapeOptions}
   */
  avatarShape?: avatarShapeOptions
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
   * @description 段落占位图宽度，可传数组来设置每一行的宽度
   * @type {(number | string | (number | string)[])}
   */
  rowWidth?: number | string | (number | string)[]
  /**
   * @description 子组件内容
   * @type {JSX.Element}
   */
  children?: JSX.Element
}
export type avatarShapeOptions = 'round' | 'square'
const DEFAULT_ROW_WIDTH = '100%';
export default function Skeleton (props: SkeletonProps) {

  if (!props.loading) {
    return <View>{props.children}</View>
  }

  const getRowWidth = (index: number) => {
    if (props.rowWidth === DEFAULT_ROW_WIDTH) {
      return DEFAULT_ROW_WIDTH
    }
    if (Array.isArray(props.rowWidth)) {
      return props.rowWidth[index]
    }
    return props.rowWidth
  }

  const addUnit = (value?: string | number)  => {
    return typeof value === 'number' ? Taro.pxTransform(value) : value
  }

  const renderAvatar = (): JSX.Element | null => {
    if (props.avatar) {
      const avatarClass = classnames('skeleton-avatar', {
        'skeleton-avatar-round': props.avatarShape === 'round'
      })
      return <View className={avatarClass} style={` width: ${addUnit(props.avatarSize)};
        height: ${addUnit(props.avatarSize)} `} />
    }
    return null
  }

  const renderTitle = (): JSX.Element | null => {
    if (props.title) {
      return <View className='skeleton-title' style={`width: ${addUnit(props.titleWidth)}`}></View>
    }
    return null
  }
  const renderAction = (): JSX.Element | null => {
    if (props.action) {
      return <View className='skeleton-action'/>
    }
    return null
  }
  const renderRows = (): JSX.Element | null => {
    if (props.row) {
      const rowArray = Array.apply(null, Array(props.row)).map((item, index) => index)
      const Rows = rowArray.map((item, index) => {
        return <View className='skeleton-row' style={`width: ${addUnit(getRowWidth(index))}`}/>
      })
      return <View className='skeleton-rows'>{Rows}</View>
    }
    return null
  }

  const rootClass = classnames(['skeleton', {
    'skeleton-animate': props.animate
  }])
  return (
    <View className={rootClass}>
      {renderAvatar()}
      <View className='skeleton-content'>
        {renderTitle()}
        {renderRows()}
      </View>
      {renderAction()}
    </View>
  )
}
Skeleton.defaultProps = {
  avatarSize: 90,
  row: 0,
  loading: true,
  animate: true,
  rowWidth: '100%',
  titleWidth: '40%',
  avatarShape: 'round'
}