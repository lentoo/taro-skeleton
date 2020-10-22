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
  state = {
    loading: true,
    checked: false
  }

  componentWillMount () { }


  componentDidMount () { }

  componentWillUnmount () { }

  config: Config = {
    navigationBarTitleText: '首页'
  }
  
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

        <Text>纵向排练</Text>
        <View className='column-skeleton'>
          <Skeleton type='column' title titleWidth='80%' avatar></Skeleton>
          <Skeleton type='column' row={1} rowWidth='70%' avatar></Skeleton>
          <Skeleton type='column' title titleWidth='60%' avatar></Skeleton>
          <Skeleton type='column' title titleWidth='50%' avatar contentAlignStyle='right'></Skeleton>
          <Skeleton type='column' title titleWidth='100%' avatar></Skeleton>
        </View>

        <Text>修改 动画模式 </Text>
        <Skeleton animateName='elastic' title row={2} rowWidth={['80%', '50%']}></Skeleton>
        
        <Text>自定义 row 的宽高</Text>
        <Skeleton row={1} rowProps={[{
          width: '50%',
          height: '50px'
        }]} avatar
        ></Skeleton>
        <Text>自定义style</Text>
        <View className='custom'>
          <Skeleton row={1} rowProps={[{
            width: '50%',
            height: '50px'
          }]} avatar
          ></Skeleton>
        </View>
        
        <Switch checked={this.state.checked} onChange={value => {
          console.log('value', value);
          this.setState({
            loading: !value.detail.value
          })
        }}
        >显示子组件内容</Switch>
        <Skeleton loading={this.state.loading} title avatar row={1} rowWidth={['90%', '50%']} action >
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
