import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Button, Image, Switch } from '@tarojs/components'
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
    loading: true,
    checked: false
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>显示 标题/描述/操作按钮 占位图</Text>
        <Skeleton title row={1} action avatar></Skeleton>

        <Text>修改 row 行数 以及 宽度 </Text>
        <Skeleton title row={2} rowWidth={['80%', '50%']} avatar></Skeleton>

        <Text>修改 头像占位图 样式 </Text>
        <Skeleton title row={2} rowWidth={['80%', '50%']} avatar avatarShape='square'></Skeleton>

        <Text>修改 头像占位图 大小 </Text>
        <Skeleton title row={2} rowWidth={['80%', '50%']} avatar avatarSize={120} avatarShape='square'></Skeleton>
        

        <Text>关闭动画, 修改标题占位图宽度</Text>
        <Skeleton title titleWidth={'60%'} animate={false} row={2} rowWidth={['80%', '50%']} avatar></Skeleton>


        <Switch checked={this.state.checked} onChange={value => {
          console.log('value', value);
          this.setState({
            loading: !value.detail.value
          })
        }}>显示子组件内容</Switch>
        <Skeleton loading={this.state.loading} title avatar row={1} rowWidth={['90%', '50%']} action>
          <View className='item'>
            <View className='item-img'>
              <Image className='item-img' src='https://iconfont.alicdn.com/t/1536041894220.jpg@100h_100w.jpg'></Image>
            </View>
            <View className='item-info'>
              <View className='item-info-title'>Skeleton 骨架屏</View>
              <View className='item-info-desc'>Skeleton 骨架屏 简单易用</View>
            </View>
            <View >
              <Button type='primary' className='item-btn'>操作</Button>
            </View>
          </View>
        </Skeleton>

      </View>
    )
  }
}
