const baseUrl = 'http://q80ates4m.bkt.clouddn.com/image';

exports.bannerList = [
    {
        imageSrc:`${baseUrl}/banner1.jpg`
    },
    {
        imageSrc:`${baseUrl}/banner2.jpg`
    },
    {
        imageSrc:`${baseUrl}/banner3.jpg`
    }
];


exports.colorList = ['#7647d4', '#f37101', '#3686CF', 'pink', '#617ae4', '#ff8401', '#FFC66D', '#9876AA'];


exports.mainCardList = [
    {
        title: '我的博客',
        describe: '这里的内容是web前端的技术和项目的经验；' +
            '技术主要包括html、css、javascript、vue、react、webpack、node、express；' +
            '项目主要包括pc端、微信公众号、支付宝生活号、微信小程序、webapp、安卓；',
        button: '点击查看我的博客',
        image: `${baseUrl}/blog-img.jpg`,
        itemKey: 'blog'
    },
    {
        title: '个人作品',
        describe: '这里主要是展示我的个人作品；包括electron-vue音视频播放器；',
        button: '点击查看我的个人作品',
        image: `${baseUrl}/work-img.jpg`,
        itemKey: 'works'
    },
    {
        title: '关于我',
        describe: '这里主要是一些关于我的信息，姓名、年龄、毕业院校、爱好等等；',
        button: '点击查看我的简介',
        image: `${baseUrl}/about-img.jpeg`,
        itemKey: 'about'
    },
    {
        title: '其他',
        describe: '这里主要是一些其他的东西，比如我的GitHub、CSDN等',
        button: '点击查看其他信息',
        image: `${baseUrl}/other-img.jpg`,
        itemKey: 'other'
    },
    {
        title: '留言板',
        describe: '你可以在这里给我留言，并留下你的联系方式，我看见了会第一时间回复你；',
        button: '去涂鸦',
        image: `${baseUrl}/message-img.jpg`,
        itemKey: 'message'
    }
];


exports.articleList = [
    {
        title: 'webpack4+react配置多页面移动端应用程序',
        content: 'webpack4+react配置多页面移动端应用程序前言技术栈项目目录结构移动端适配方案webpack配置基础配置开发环境配置react+redux热重载生产环境配置',
        time: '2020-03-12 21:07:45',
        tags: ['webpack', 'react', 'javascript', '移动端'],
        imageSrc: `${baseUrl}/blog-webpack.jpg`,
        blogSrc:'https://blog.csdn.net/vgub158/article/details/104822129'
    },
    {
        title: '安卓原生与网页js的通信',
        content: '安卓原生与网页js的通信前言1、url schema2、往浏览器中注入对象3、原生端调用js总结 前言 前一段时间在搞安卓的Hybird App，涉及到了安卓原生与网页js的通信交互。趁现在年末有空就做一下总结。',
        time: '2020-01-22 11:03:45',
        tags: ['android', 'web', 'javascript', 'Hybird', '移动端', 'h5'],
        imageSrc: `${baseUrl}/blog-android.jpg`,
        blogSrc:'https://blog.csdn.net/vgub158/article/details/104068453'
    },
    {
        title: '前端难点，坑点总结',
        content: '问题总结前言登录验证码图片显示post下载文件js调用ie浏览器的打印功能打印网页上内容移动端适配不同的屏幕ie9浏览器异步上传文件ie浏览器 input标签会出现ie自带叉号使用flex布局，文字查出部分变省略号总结 前言 最近工作上遇见一些难点和坑，花费了不少时间去解决.',
        time: '2019-11-08 16:05:59',
        tags: ['移动端', 'pc'],
        imageSrc: `${baseUrl}/blog-js.jpg`,
        blogSrc:'https://blog.csdn.net/vgub158/article/details/102975010'
    },
    {
        title: '支付宝生活号h5网页--蚂蚁认证',
        content: '支付宝生活号h5网页--蚂蚁认证前言开发点总结 前言 前段时间生活号要求加功能，需要实现社会保障卡的挂失和解挂功能，同是为了保障用户信息的安全，需要使用到人脸对比，确保当前正在使用的支付宝的用户是本人使用。原本打算让用户在手机图片库选择人头像照片或者拍摄一张人头像照片上传服务器.',
        time: '2019-09-05 17:18:44',
        tags: ['生活号', '移动端', 'html5', '蚂蚁认证'],
        imageSrc: `${baseUrl}/blog-face.jpg`,
        blogSrc:'https://blog.csdn.net/vgub158/article/details/100562321'
    },
    {
        title: '支付宝生活号h5网页开发',
        content: '支付宝生活号h5网页开发前言概述技术的选型以及项目的架构开发注意点总结 前言 前一段时间，我负责了公司的一个支付宝生活号h5网页开发的项目，主要是用来采集用户的数据的。到现在也已经接近尾声了，在开发的过程中也遇见了不少的坑坑洼洼，所以我就想着总结一下这个项目的一些问题和解决思路。',
        time: '2019-08-03 11:02:14',
        tags: ['架构', '生活号', '移动端', 'html5', 'vue'],
        imageSrc: `${baseUrl}/blog-html5.jpg`,
        blogSrc:'https://blog.csdn.net/vgub158/article/details/98315693'
    },
    {
        title: '基于electron的音视频播放器',
        content: '基于electron的音视频播放器前言选择做一个音视频播放器桌面应用程序原因技术的选型已经实现了的功能音视频播放实现右键菜单实现.',
        time: '2019-06-12 09:55:14',
        tags: ['electron', 'vue', 'html5', 'node'],
        imageSrc: `${baseUrl}/blog-electron.jpg`,
        blogSrc:'https://blog.csdn.net/vgub158/article/details/91490185'
    },
    {
        title: '单页面应用首页白屏时间过长和SEO不友好的问题的一些技术的优缺点和原理',
        content: '单页面应用首页白屏时间过长和SEO不友好的问题的一些技术的优缺点和原理概括首页白屏时间过长的原因SEO不友好的原因预渲染技术骨架屏技术总结 概括 随着vue，react等前端框架的出现，单页面应用也随着流行起来。越来越多的项目都会使用vue，react等框架来实现单页面应用。',
        time: '2019-04-10 17:52:09',
        tags: ['单页面', 'SEO'],
        imageSrc: `${baseUrl}/blog-seo.jpg`,
        blogSrc:'https://blog.csdn.net/vgub158/article/details/89189591'
    },
    {
        title: 'react与vue对比',
        content: '这里写自定义目录标题react与vue对比vue使用的是.vue文件，react使用的是.js或.jsx文件html模板css方面组件化方面数据流方面状态管理方面其他方面 react与vue对比 最近公司打算开发一个新项目，讨论了一下使用哪种框架进行开发。',
        time: '2019-03-04 23:15:23',
        tags: ['vue', 'react'],
        imageSrc: `${baseUrl}/blog-react-vue.jpg`,
        blogSrc:'https://blog.csdn.net/vgub158/article/details/88145687'
    },
];


exports.workList = [
    {
        title: 'player',
        abstract: 'electron-vue音视频播放器',
        tags: ['electron', 'vue', 'node', 'html5', 'DPlayer', 'mousetrap', 'electron-updater'],
        functions: [
            '视频播放：目前已经支持大多数视频格式，比如 MP4、WebM、mkv、avi、WMV、FLV、rmvb 等，后续会添加更多的视频格式',
            '音频播放：目前已经支持大多是音频格式，比如 MP3 等，后续会添加更多的音频格式',
            '换肤功能：该功能类似其他软件的换肤功能，用户可以根据自己的喜好选择不同的主题皮肤',
            '历史记录：音视频播放器会自动记录用户播放已经过的的视频或音频，比如音频或视频播放到那个时间',
            '记忆功能：音视频播放器会自动保存用户的操作和修改的配置，' +
            '比如用户更换了主题皮肤，用户关闭了应用后再次打开，' +
            '音视频播放器会应用用户已经修改的主题皮肤。' +
            '用户对视频或音频进行加速等操作都会被记忆下来，用户再次点击该视频或音频就会恢复用户的操作',
            '播放模式：播放模式主要有5种，分别是 单个播放、单个循环、循环播放列表、顺序播放、随机播放',
            '排序模式：排序模式主要有5种，分别是 默认排序、大小排序、时间排序、随机排序、名称排序',
            '置顶功能：保持应用界面始终在最顶端',
            '加减速功能：音视频加速或者减速播放',
            '拖拽文件或文件夹：用户可以把文件或者文件夹拖拽进音视频播放器中，应用会过滤掉不能播放的文件',
            '全屏功能：实现了应用的全屏功能，这里是使用了electron提供的全屏api，没有使用html5的全屏api',
            '右键菜单功能：目前已经实现了大多数右键菜单的功能，没实现的后续实现',
            '国际化：目前已经实现了中英文切换，后期有需要再继续实现其他语言',
            '自动更新功能'
        ],
        imageSrc: `${baseUrl}/player.png`,
        workSrc:'https://github.com/c10342/player'
    },
    {
        title: '基于HTML5的在线答题系统前端',
        abstract: '此项目为广东海洋大学软件工程系2019届毕业设计课题--基于HTML5的在线答题系统的设计与实现',
        tags: ['vue', 'pwa', 'axios', 'element-ui'],
        functions: [
            '登录：用户输入邮箱和密码登录在线答题系统',
            '第三方登录：用户点击github登录，输入github账号密码并同意授权后登录在线答题系统',
            '注册：用户输入姓名，邮箱，验证码，密码注册账号',
            '修改用户名：用户输入新的用户名修改用户名',
            '修改密码：用户输入旧的密码和新的密码修改密码',
            '查看用户信息：用户查看自己的信息',
            '添加试卷：用户添加一份试卷（包括试卷名称，试题，选项，答案），添加方式有上传文件和手动输入',
            '删除试卷：用户选中自己已经发布的试卷后删除试卷',
            '查询试卷：用户输入的查询条件查询试卷（包括发布时间，发布者用户名，试卷标题）',
            '填写试卷：用户选择试卷后填写试卷内容',
            '修改试卷：用户选中自己已经发布的试卷后修改试卷',
            '查询个人错题库：用户输入查询条件查询个人错题（查询条件包括错题标题，试题类型，创建时间）',
            '查询试题库：用户输入查询条件查询试题库（查询条件包括试题标题，试题类型，创建时间）',
            '添加试题：用户手动添加试题，添加方式包括2种，一是上传文件添加，二是手动添加',
            '删除试题：用户选中一道试题后，删除试题',
            '修改试题：用户选择一道试题后，输入修改内容，然后修改内容',
            '随机生成练习题：用户输入所需要生成的题数，然后生成练习题',
            '从试题库选择试题创建试卷：用户点击是题库中的试题，试题会自动添加到试卷中，用户点击确定后，生成试卷',
            '评论试题：用户选择一份已经完成了的试卷，然后输入评论内容进行评论',
            '查询评论：用户可以查询自己所发表的评论和其他人对自己发布的试卷的评论',
            '收藏试卷：用户选择一份试卷后，点击收藏，即可收藏试卷',
            '分享试卷给qq或者微信好友：用户选择一份自己已经发布的试卷，选择分享给qq好友或者微信好友',
            '查询试卷的整体统计分析：用户输入查询条件（包括试卷标题，发布时间）查询试卷的统计分析情况',
            '查询试卷每一道试题的统计分析：用户选择一份试卷后，查看每一道试题的统计分析情况',
            '查询答题者答题详情：用户查看自己已经发布的试卷每一个答题者的答题详情',
            '查询试题图表分析：用户选择一道试题后，查看该试题的图表分析情况'
        ],
        imageSrc:`${baseUrl}/html5-answer.png`,
        workSrc:'http://120.79.209.208:9003/'
    },
    {
        title: '基于HTML5的在线答题系统后端',
        abstract: '此项目为广东海洋大学软件工程系2019届毕业设计课题--基于HTML5的在线答题系统的设计与实现',
        tags: ['node', 'express', 'redis', 'mongodb'],
        functions: [
            '用户管理模块：用户和管理员的登录、第三方登录、邮箱SMTP服务注册、修改密码、修改用户名、查看用户信息功能',
            '试卷管理模块：试卷查询、试卷增加、试卷修改、试卷添加、试卷填写',
            '试题管理模块：个人错题库、试题库查询、试题添加、试题删除、试题修改、随机生成练习题、从试题库选择试题创建试卷功能',
            '反馈模块：用户对试题的评论、用户查询评论',
            '账号权限管理模块：管理员对普通用户账号进行删除、管理员查询普通用户信息、分配权限',
            '收藏分享模块：试卷的收藏、试卷分享给QQ好友、试卷分享给微信好友',
            '试卷统计分析模块：试卷的整体统计分析、试卷每一道试题的统计分析、自动批改答案、查看答题者答题详情、图表分析',
            '其他功能模块：试卷的离线缓存、在线考试防作弊功能、pwa单页面应用功能、数据网络优先缓存策略、骨架屏应用技术、预渲染页面、文本检测功能',
        ],
        workSrc:'https://github.com/c10342/html5-online-answer-background',
        imageSrc:`${baseUrl}/banner1.jpg`,
    }
];

exports.aboutImage = `${baseUrl}/about-bg.jpg`;


exports.tagsList = [
    'vue.js', 'react.js', 'node.js', 'express', 'mongodb',
    'electron', 'android', '小程序', '公众号', '生活号', 'webapp',
    'webpack', 'javascript', 'html', 'css', 'node-sass', 'less'];


exports.sortCardList = [
    {
        imageSrc: `${baseUrl}/github.jpg`,
        src: 'https://github.com/c10342'
    },
    {
        imageSrc: `${baseUrl}/csdn.jpg`,
        src: 'https://blog.csdn.net/vgub158'
    },
    {
        imageSrc:`${baseUrl}/osChina.jpg`,
        src:'https://www.oschina.net/p/electron-player'
    }
];

