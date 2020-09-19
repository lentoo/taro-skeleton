# Skeleton 骨架屏
基于 Taro 的一个简单易用的骨架屏组件

> **2.0**版本以上支持 **Taro3.0**
### 支持多端平台使用 
1. 微信小程序
2. h5
3. 百度小程序
4. 头条小程序
5. 支付宝小程序
6. 其它平台未测试

### 快速上手
#### 引入组件

``` javascript
import Skeleton from 'taro-skeleton'
```
#### 引入组件样式的方式
* 全局引入（JS中）
``` js
import 'taro-skeleton/dist/index.css' // 引入组件样式
```

### 配置需要额外编译的源码模块
由于引用 `node_modules` 的模块，默认不会编译，所以需要额外给 H5 配置 `esnextModules`，在 taro 项目的 `config/index.js` 中新增如下配置项：
``` js
h5: {
  esnextModules: ['taro-skeleton']
}
```

## 代码演示

### 基础用法

通过`title`属性显示标题占位图，通过`row`属性配置占位段落行数

``` html
<Skeleton title row={3} />
```

### 显示头像

通过`avatar`属性显示头像占位图

``` html
<Skeleton title avatar row={3} />
```
### 不同排列方式
通过`type`属性来控制排列方式，默认值为 `row`，可选`column`
``` html
<Skeleton type='column' title titleWidth={'80%'} avatar />
```
### 自定义样式
通过添加自定义`className`类名进行覆盖即可`
``` scss
// index.scss
.custom-class { 
  .skeleton-avatar, .skeleton-row, .skeleton-title {
    background-color: red;
  }
}
```
``` jsx
// index.jsx
<Skeleton className='custom-class' row={1} rowProps={[{
  width: '50%',
  height: '50px'
}]} avatar
></Skeleton>
```

### 展示子组件

将`loading`属性设置成`false`表示内容加载完成，此时会隐藏占位图，并显示`Skeleton`的子组件

``` html
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
![image.gif](https://img10.360buyimg.com/img/jfs/t1/60232/20/13975/296420/5db7e244E05a0d555/d7724d0dd3af11ec.gif)



## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| type | 定义排列方式  | `row/column` | `row` | 1.0.12 |
| row | 段落占位图行数 | `number` | `0` | - |
| rowWidth | 段落占位图宽度，可传数组来设置每一行的宽度 | `number/string/number[]/string[]` | `100%` | - |
| rowHeight | 段落占位图高度，可传数组来设置每一行的高度 | `number/string/number[]/string[]` | `24` | 1.0.7 |
| rowProps | 用于定制 row 的宽跟高，可传数组来设置每一行的宽跟高，如果配置了该属性，则 row-height 配置无效 | `RowProps/RowProps[]` | - | 1.0.7 |
| title | 是否显示标题占位图 | `boolean` | `false` | - |
| titleWidth | 标题占位图宽度 | `number/string` | `40%` | - |
| avatar | 是否显示头像占位图 | `boolean` | `false` | - |
| avatarSize | 头像占位图大小 | `number/string` | `90` | - |
| avatarShape | 头像占位图形状，可选值为`square` | `string` | `round` | - |
| action | 显示右边操作按钮占位图 | `boolean` | `false` | - |
| loading | 是否显示占位图，传`false`时会展示子组件内容 | `boolean` | `true` | - 
| animate | 是否开启动画 | `boolean` | `true` | - |
| animateName | 动画类型，可选值为`elastic` | `string` | `blink` | 1.3.9 |
| contentAlignStyle | 内部内容对齐方式，可选值为 | `left/center/right` | `center` | 1.4.0
| designWidth |Taro.pxTransform(px, designWidth) 的designWidth的属性| `number` | `750` | 2.0.0 |
### RowProps

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| width | 段落占位图宽数 | `number/string` | - | - |
| height | 段落占位图高度 | `number/string` | - | - |

## [更新日志](https://github.com/lentoo/taro-skeleton/blob/master/CHANGELOG.md)
