# Skeleton 骨架屏
基于 taro 到一个简单易用的骨架屏组件

### 支持多端平台使用 
1. 微信小程序
2. h5
3. 其它平台未测试

### 引入

``` javascript
import Skeleton from 'taro-skeleton'
```

## 代码演示

### 基础用法

通过`title`属性显示标题占位图，通过`row`属性配置占位段落行数

``` jsx
<Skeleton title row={3} />
```

### 显示头像

通过`avatar`属性显示头像占位图

``` jsx
<Skeleton title avatar row={3} />
```

### 展示子组件

将`loading`属性设置成`false`表示内容加载完成，此时会隐藏占位图，并显示`Skeleton`的子组件

``` jsx
<Skeleton
  title
  avatar
  row={3}
  loading={loading}
>
  <Text>实际内容</Text>
</Skeleton>
```

```jsx
export default class Index extends Component {
  state = {
    loading: false
  }
  render () {
    return (
      <View className='index'>
        <Skeleton loading={this.state.loading} title avatar row={2} action></Skeleton>
      </View>
    )
  }
}
```

## 效果截图
![image.gif](https://img10.360buyimg.com/img/jfs/t1/63219/14/8586/484603/5d666c6bE4432c8e7/aa1d8d800249a9e5.gif)



## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| row | 段落占位图行数 | `number` | `0` | - |
| row-width | 段落占位图宽度，可传数组来设置每一行的宽度 | `number/string/number[]/string[]` | `100%` | - |
| row-height | 段落占位图高度，可传数组来设置每一行的高度 | `number/string/number[]/string[]` | `24` | 1.0.7 |
| rowProps | 用于定制 row 的宽跟高，可传数组来设置每一行的宽跟高，如果配置了该属性，则 row-height 配置无效 | `RowProps/RowProps[]` | - | 1.0.7 |
| title | 是否显示标题占位图 | `boolean` | `false` | - |
| title-width | 标题占位图宽度 | `number/string` | `40%` | - |
| avatar | 是否显示头像占位图 | `boolean` | `false` | - |
| avatar-size | 头像占位图大小 | `number/string` | `90` | - |
| avatar-shape | 头像占位图形状，可选值为`square` | `string` | `round` | - |
| action | 显示右边操作按钮占位图 | `boolean` | `false` | - |
| loading | 是否显示占位图，传`false`时会展示子组件内容 | `boolean` | `true` | - 
| animate | 是否开启动画 | `boolean` | `true` | - |
| animateName | 动画类型，可选值为`elastic` | `string` | `blink` | 1.3.9 |

### RowProps

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| width | 段落占位图宽数 | `number/string` | - | - |
| height | 段落占位图高度 | `number/string` | - | - |

## [更新日志](https://github.com/lentoo/taro-skeleton/blob/master/CHANGELOG.md)