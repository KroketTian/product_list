## 有市买家端微信小程序

### 目录结构
  ```bash
  ├── image                        // 图片
  ├── page
  │   ├── cart                     // 购物车
  │   ├── category                 // 平台分类
  │   ├── index                    // 平台主页
  │   ├── login                    // 登录
  │   ├── mall                     // 店铺
  │   ├── mine                     // 我的
  │   └── order                    // 订单列表
  ├── sub-cart                     // 购物车
  │   ├── checkout                 // 结算页面
  │   └── order-pay                // 支付页面
  ├── sub-index
  │   ├── industry-news            // 行业资讯
  │   ├── quick-cart               // 快速补货
  │   └── vendor                   // 合作商家
  ├── sub-login
  │   ├── register                 // 注册
  │   └── reset-pass               // 重置密码
  ├── sub-mall
  │   ├── cooperation              // 申请合作
  │   ├── distributor              // 店铺主页
  │   ├── distributor-category     // 店铺分类
  │   ├── distributor-info         // 店铺信息
  │   ├── product                  // 商品详情
  │   ├── search                   // 搜索页面
  │   ├── search-product           // 商品搜索
  │   ├── search-store             // 店铺搜索
  │   ├── store                    // 店铺装修
  │   └── store-inner              // 店铺装修内页
  ├── sub-mine
  │   ├── account                  // 构建相关
  │   |   ├── change-mobile        // 修改手机号
  │   |   ├── change-pass          // 修改密码
  │   |   └── change-user          // 修改用户名
  │   ├── address
  │   |   ├── add                  // 添加收货地址
  │   |   ├── edit                 // 编辑收货地址
  │   |   └── list                 // 收货地址列表
  │   ├── chat-message             // 聊天消息
  │   ├── favorite                 // 收藏的商品
  │   ├── feedback                 // 分开
  │   ├── follow                   // 收藏的店铺
  │   ├── message                  // 消息
  │   ├── message-list             // 消息列表
  │   └── settings                 // 设置
  │       ├── about                // 关于我们
  │       └── agreement            // 用户协议
  ├── sub-order
  │   ├── order-cancel             // 取消订单
  │   ├── order-cancel-detail      // 取消订单详情
  │   ├── order-detail             // 订单详情
  │   ├── order-search             // 订单搜索
  │   └── order-track              // 订单跟踪
  └── utils                        // 公共方法
  ```

### 功能模块拆分
#### 李裕涛
- [ ] 店铺商品分类
- [x] 找货-分类
- [ ] 搜索页面-未搜索
- [ ] 搜索店铺列表
- [ ] 搜索商品列表
- [ ] 店铺首页
- [ ] 店铺内页
- [ ] 店铺详情
- [ ] 店铺信息
- [ ] 商品详情

#### 周海军
- [ ] 进货车页面
- [ ] 结算页面
- [ ] 下单成功支付页面
- [ ] 快速补货页面
- [ ] 收货地址列表
- [ ] 新增收货地址
- [ ] 编辑收货地址

#### 郭志朗
- [ ] 订单搜索页面
- [ ] 订单列表
- [ ] 订单详情
- [ ] 订单跟踪
- [ ] 取消订单
- [ ] 取消订单详情
- [ ] 登录
- [ ] 微信登录
- [ ] 注册
- [ ] 修改密码
- [ ] 重置密码

#### 刘志敏
- [ ] 首页
- [ ] 合作商家列表
- [ ] 行业资讯
- [ ] 我的
- [ ] 账号管理
- [ ] 消息
- [ ] 消息列表
- [ ] 聊天消息
- [ ] 收藏商品列表
- [ ] 收藏店铺列表
- [ ] 意见反馈
- [ ] 修改昵称
- [ ] 设置
- [ ] 关于我们
- [ ] 修改手机号
- [ ] 用户协议
- [ ] 申请合作