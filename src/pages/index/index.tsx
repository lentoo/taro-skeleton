import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'
import Skeleton from '../../components/Skeleton'

export default class Index extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页'
  }
  state = {
    loading: false
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Skeleton title avatar row={2} action></Skeleton>
        <Skeleton title avatar row={2} action loading={this.state.loading}>
          <Text>实际内容</Text>
        </Skeleton>
        <Skeleton title avatar row={3}></Skeleton>
        <Skeleton title avatar row={3}></Skeleton>
        <Skeleton title avatar row={2} rowWidth={['80%', '70%']} action></Skeleton>
        <Skeleton title avatar row={2} action></Skeleton>
        <Skeleton title avatar row={2} action></Skeleton>
      </View>
    )
  }
}
