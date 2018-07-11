// 首页大图

function bannerList(){
  var list=[
    "http://img0.imgtn.bdimg.com/it/u=3387604187,1975332677&fm=27&gp=0.jpg " ,
    "http://pic2.ooopic.com/12/42/25/02bOOOPIC95_1024.jpg",
    "http://pic.58pic.com/58pic/13/69/82/65Z58PICpiT_1024.jpg",
    "http://pic31.photophoto.cn/20140415/0005018701019570_b.jpg"
  ]
  return list
}

// 搜索页店铺
function storeList() {
  var list = [
    {
      name: "深圳市锁壹科技有限公司",
      scNum: 100, 
      isFold:true,
      xlNum: 233, 
      
      img:"http://imgqn.koudaitong.com/upload_files/2015/03/02/FgB0RhI79OhzjXSUOBgp7FHE2xFp.jpg",
      intro:"深圳锁壹科技有限公司坐落于经济发达的珠三角腹地,是一家专业从事智能锁研发、生产、销售和技术服务的现代化高科技智能锁企业，拥有多项专利技术。公司以前卫的理念、专业的队伍、严谨的管理和优良的设备，经过多年的市场耕耘，销售网络基本覆盖全国主要市场。",

      goodsList: [
        {

          discount: 6,
          number: 1,
          goodsID: "2",
            
          goodsName: "韩都衣舍韩版2015秋装新款女装翻领绣花图案长袖衬衫",
          imgSrc: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=84382490,1584239411&fm=27&gp=0.jpg",
          price: "260.00",
          oldPrice: "433.33",
          buynumber: 101,
          className: "衬衫",
          detail: "产品参数：材质成分: 棉100%。销售渠道类型: 纯电商(只在线上销售)。货号: GW4937。服装版型: 直筒。风格: 通勤。通勤: 韩版。衣长: 常规款。袖长: 长袖。袖型: 衬衫袖。领型: 其他。衣门襟: 单排多扣。图案: 碎花",
          imglist: [
            "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=84382490,1584239411&fm=27&gp=0.jpg",
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=272826797,234131395&fm=27&gp=0.jpg",
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530851984766&di=08658b5e2353cf3776830b5d32cf1024&imgtype=0&src=http%3A%2F%2Fimage.csfz.cn%2Fibank%2F76867001248272.jpg", "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530851984766&di=6aad3e85c7e6099a6bcdf63f35aff0d3&imgtype=0&src=http%3A%2F%2Fimg000.hc360.cn%2Fy4%2FM00%2F38%2F47%2FwKhQiFTwK9KERIhEAAAAAENKa_s084.jpg"
          ]

        },
        {
          number: 1,
          discount: 10,
          goodsID: "3",
          goodsName: "韩都衣舍长袖衬衫",
          imgSrc: "http://img.alicdn.com/bao/uploaded/i4/TB1QP0gJpXXXXczXpXXXXXXXXXX_!!0-item_pic.jpg_b.jpg",
          price: "198.00",
          oldPrice: "198.00",
          buynumber: 311,
          className: "衬衫",
          detail: "材质成分: 棉55% 聚酯纤维45%。销售渠道类型: 纯电商(只在线上销售)。货号: AA5041。服装版型: 直筒。风格: 通勤。通勤: 韩版。",
          imglist: [
            "http://img.alicdn.com/bao/uploaded/i4/TB1QP0gJpXXXXczXpXXXXXXXXXX_!!0-item_pic.jpg_b.jpg",
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=272826797,234131395&fm=27&gp=0.jpg",
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530851984766&di=08658b5e2353cf3776830b5d32cf1024&imgtype=0&src=http%3A%2F%2Fimage.csfz.cn%2Fibank%2F76867001248272.jpg", "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530851984766&di=6aad3e85c7e6099a6bcdf63f35aff0d3&imgtype=0&src=http%3A%2F%2Fimg000.hc360.cn%2Fy4%2FM00%2F38%2F47%2FwKhQiFTwK9KERIhEAAAAAENKa_s084.jpg"
          ]
        },
        {
          number: 1,
          discount: 8,
          goodsID: "12",
          goodsName: "男士修身商务正装",
          imgSrc: "https://static.zara-static.cn/photos///2018/V/T/2/p/7387/410/401/2/w/560/7387410401_1_1_1.jpg?ts=1520951904184",
          price: "140.00",
          oldPrice: "175.00",
          buynumber: 100,
          className: "礼服",
          detail: "工艺/流行细分风格：商务正装。关键信息上市年份季节：2015年春季",
          imglist: [
            "https://static.zara-static.cn/photos///2018/V/T/2/p/7387/410/401/2/w/560/7387410401_1_1_1.jpg?ts=1520951904184",
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=272826797,234131395&fm=27&gp=0.jpg",
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530851984766&di=08658b5e2353cf3776830b5d32cf1024&imgtype=0&src=http%3A%2F%2Fimage.csfz.cn%2Fibank%2F76867001248272.jpg", "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530851984766&di=6aad3e85c7e6099a6bcdf63f35aff0d3&imgtype=0&src=http%3A%2F%2Fimg000.hc360.cn%2Fy4%2FM00%2F38%2F47%2FwKhQiFTwK9KERIhEAAAAAENKa_s084.jpg"

          ]

        },
        {
          number: 1,
          discount: 9,
          goodsID: "19",
          goodsName: "伴娘礼服短款打底连衣裙",
          imgSrc: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530850485430&di=b2827f6790f2d0fff3fd8206da60c6d4&imgtype=0&src=http%3A%2F%2Fs3.sinaimg.cn%2Fmw690%2F006bCkaxgy6VvbpI8Uid2%26690",
          price: "115.00",
          oldPrice: "127.78",
          buynumber: 100,
          className: "礼服",
          detail: " 商品名称：2015秋季新款名媛气质钉珠伴娘礼服短款打底连衣裙性感高领包臀裙；韩国进口弹力天丝棉 ，袖管是双层网纱+蕾丝，很精致，奶牛丝内衬，带胸垫 ，胸口前面是睫毛蕾丝，领边的蕾丝出单独做出了一层拉须，这种拉须是用单独的机器切割出来的哦，很重工，半身的钉珠全手工缝制，全部都是进口珠子和钻，光泽度好",
          imglist: [
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530850485430&di=b2827f6790f2d0fff3fd8206da60c6d4&imgtype=0&src=http%3A%2F%2Fs3.sinaimg.cn%2Fmw690%2F006bCkaxgy6VvbpI8Uid2%26690",
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=272826797,234131395&fm=27&gp=0.jpg",
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530851984766&di=08658b5e2353cf3776830b5d32cf1024&imgtype=0&src=http%3A%2F%2Fimage.csfz.cn%2Fibank%2F76867001248272.jpg", "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530851984766&di=6aad3e85c7e6099a6bcdf63f35aff0d3&imgtype=0&src=http%3A%2F%2Fimg000.hc360.cn%2Fy4%2FM00%2F38%2F47%2FwKhQiFTwK9KERIhEAAAAAENKa_s084.jpg"

          ]

        },
        {
          number: 1,
          discount: 8,
          goodsID: "24",
          goodsName: "大码韩版棉袄羊羔毛外套",
          imgSrc: "http://img007.hc360.cn/hb/MTQ2MDczMjU3OTAxMzkxMjI0NDU1Mw==.jpg",
          price: "79.90",
          oldPrice: "99.88",
          buynumber: 100,
          className: "棉服",
          detail: "品牌: other/其他服装版型: 修身厚薄: 加厚风格: 甜美甜美: 森女衣长: 常规袖长: 长袖领子: 半开领袖型: 常规衣门襟: 拉链图案: 纯色流行元素/工艺: 蝴蝶结 带毛领 链条 口袋 荷叶边 系带 拼接 绑带 纽扣 拉链面料材质: 棉成分含量: 96%及以上填充物: 棉96%及以上",
          imglist: [
            "http://img007.hc360.cn/hb/MTQ2MDczMjU3OTAxMzkxMjI0NDU1Mw==.jpg",
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=272826797,234131395&fm=27&gp=0.jpg",
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530851984766&di=08658b5e2353cf3776830b5d32cf1024&imgtype=0&src=http%3A%2F%2Fimage.csfz.cn%2Fibank%2F76867001248272.jpg", "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530851984766&di=6aad3e85c7e6099a6bcdf63f35aff0d3&imgtype=0&src=http%3A%2F%2Fimg000.hc360.cn%2Fy4%2FM00%2F38%2F47%2FwKhQiFTwK9KERIhEAAAAAENKa_s084.jpg"

          ]

        },
        {
          number: 1,
          discount: 10,
          goodsID: "33",
          goodsName: "棒球领拉链长袖插袋外套",
          imgSrc: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530850584685&di=f73c4791eea4210eca3b576066bdaf03&imgtype=0&src=http%3A%2F%2Fimg14.360buyimg.com%2Fn0%2Fjfs%2Ft1741%2F78%2F457085803%2F258690%2F95fd6a15%2F55d187a5N9038af26.jpg",
          price: "189.00",
          oldPrice: "189.00",
          buynumber: 100,
          className: "短外套",
          detail: "品牌: Amii组合形式: 单件衣长: 短款袖长: 长袖领子: 其他衣门襟: 拉链图案: 纯色流行元素/工艺: 及简 立体压花年份季节: 2015年秋",
          imglist: [
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530850584685&di=f73c4791eea4210eca3b576066bdaf03&imgtype=0&src=http%3A%2F%2Fimg14.360buyimg.com%2Fn0%2Fjfs%2Ft1741%2F78%2F457085803%2F258690%2F95fd6a15%2F55d187a5N9038af26.jpg",
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=272826797,234131395&fm=27&gp=0.jpg",
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530851984766&di=08658b5e2353cf3776830b5d32cf1024&imgtype=0&src=http%3A%2F%2Fimage.csfz.cn%2Fibank%2F76867001248272.jpg", "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530851984766&di=6aad3e85c7e6099a6bcdf63f35aff0d3&imgtype=0&src=http%3A%2F%2Fimg000.hc360.cn%2Fy4%2FM00%2F38%2F47%2FwKhQiFTwK9KERIhEAAAAAENKa_s084.jpg"

          ]

        },
        {
          number: 1,
          discount: 8,
          goodsID: "39",
          goodsName: "修身休闲短外套",
          imgSrc: "https://img.alicdn.com/bao/uploaded/i2/TB1yeBJJXXXXXa1XXXXXXXXXXXX_!!0-item_pic.jpg_b.jpg",
          price: "128.00",
          oldPrice: "160.00",
          buynumber: 100,
          className: "短外套",
          detail: "品牌: 法彩龙组合形式: 单件衣长: 短款袖长: 长袖领子: POLO领袖型: 常规衣门襟: 双排扣图案: 纯色流行元素/工艺: 口袋 绑带 纽扣",
          imglist: [
            "https://img.alicdn.com/bao/uploaded/i2/TB1yeBJJXXXXXa1XXXXXXXXXXXX_!!0-item_pic.jpg_b.jpg",
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=272826797,234131395&fm=27&gp=0.jpg",
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530851984766&di=08658b5e2353cf3776830b5d32cf1024&imgtype=0&src=http%3A%2F%2Fimage.csfz.cn%2Fibank%2F76867001248272.jpg", "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530851984766&di=6aad3e85c7e6099a6bcdf63f35aff0d3&imgtype=0&src=http%3A%2F%2Fimg000.hc360.cn%2Fy4%2FM00%2F38%2F47%2FwKhQiFTwK9KERIhEAAAAAENKa_s084.jpg"

          ]

        },
        {
          number: 1,
          discount: 6,
          goodsID: "43",
          goodsName: "2015韩国东大门女装秋冬季新款波点圆领长袖百搭卫衣",
          imgSrc: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3586828173,1838912797&fm=27&gp=0.jpg",
          price: "89.00",
          oldPrice: "148.33",
          buynumber: 100,
          className: "卫衣",
          detail: "内胆类型: 棉内胆货号: C051服装版型: 宽松厚薄: 常规风格: 通勤通勤: 韩版款式: 套头组合形式: 单件衣长: 常规袖长: 长袖领子: 圆领袖型: 常规图案: 圆点服装款式细节: 印花 拼接面料材质: 其他成分含量: 71%(含)-80%(含)适用年龄: 18-24周岁年份季节: 2015年秋季颜色分类: 白色 灰色尺码: S M L",
          imglist: [
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3586828173,1838912797&fm=27&gp=0.jpg",
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=272826797,234131395&fm=27&gp=0.jpg",
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530851984766&di=08658b5e2353cf3776830b5d32cf1024&imgtype=0&src=http%3A%2F%2Fimage.csfz.cn%2Fibank%2F76867001248272.jpg", "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530851984766&di=6aad3e85c7e6099a6bcdf63f35aff0d3&imgtype=0&src=http%3A%2F%2Fimg000.hc360.cn%2Fy4%2FM00%2F38%2F47%2FwKhQiFTwK9KERIhEAAAAAENKa_s084.jpg"

          ]
        },
        {
          number: 1,
          discount: 8,
          goodsID: "52",
          goodsName: "韩版女式宽松套头破洞牛仔长袖连帽卫衣",
          imgSrc: "http://s18.mogucdn.com/p1/151021/11gcxq_ie4tqojzmvsgezrvgqzdambqgqyde_640x960.jpg_220x330.webp",
          price: "99.00",
          oldPrice: "123.75",
          buynumber: 206,
          className: "卫衣",
          detail: "TB02哈哈~这款卫衣是秋季的最爱 减龄款哦 牛仔袖拼接设计，加上袖子上个性磨破和刺绣的勋章图案，整体上看满满的都是街头潮流原宿风格，上身效果酷酷哒！衣服的版型属于宽松型的，穿着效果无束缚力，很洋气很洋气哦 粉色比较衬肤色小清新的感觉 黑色也足够帅气，今年时尚大咖们必备的减龄装备，推荐入~",
          imglist: [
            "http://s18.mogucdn.com/p1/151021/11gcxq_ie4tqojzmvsgezrvgqzdambqgqyde_640x960.jpg_220x330.webp",
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=272826797,234131395&fm=27&gp=0.jpg",
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530851984766&di=08658b5e2353cf3776830b5d32cf1024&imgtype=0&src=http%3A%2F%2Fimage.csfz.cn%2Fibank%2F76867001248272.jpg", "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530851984766&di=6aad3e85c7e6099a6bcdf63f35aff0d3&imgtype=0&src=http%3A%2F%2Fimg000.hc360.cn%2Fy4%2FM00%2F38%2F47%2FwKhQiFTwK9KERIhEAAAAAENKa_s084.jpg"

          ]
        },
        {
          number: 1,
          discount: 8,
          goodsID: "57",
          goodsName: "波司登（BOSIDENG）羽绒服男款",
          imgSrc: "http://img14.360buyimg.com/n2/jfs/t2257/88/581178076/140752/3173e831/5618c255Nc944c200.jpg",
          price: "899.00",
          oldPrice: "1123.75",
          buynumber: 108,
          className: "棉服",
          detail: "商品产地：中国大陆 人群：青年衣门襟 ：前中拉链门襟衣长：短款含绒量：90%以上灰鸭绒领型：可脱卸帽流行元素：多口袋风格：商务休闲颜色：其他",
          imglist: [
            "http://img14.360buyimg.com/n2/jfs/t2257/88/581178076/140752/3173e831/5618c255Nc944c200.jpg",
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=272826797,234131395&fm=27&gp=0.jpg",
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530851984766&di=08658b5e2353cf3776830b5d32cf1024&imgtype=0&src=http%3A%2F%2Fimage.csfz.cn%2Fibank%2F76867001248272.jpg", "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530851984766&di=6aad3e85c7e6099a6bcdf63f35aff0d3&imgtype=0&src=http%3A%2F%2Fimg000.hc360.cn%2Fy4%2FM00%2F38%2F47%2FwKhQiFTwK9KERIhEAAAAAENKa_s084.jpg"

          ]
        }
      ],

      

     
    },
    {
      name: "河南石博士建筑材料有限公司",
      scNum: 13, 
      isFold: true,
      lNum: 233, 
      img: "http://img.yzcdn.cn/upload_files/2015/05/25/Fu8MS85MkY4NNolhiAxuqEEdmrfw.jpg" ,
      intro:"公司年成立于2014年，是一家独资公司，注册资金100万，日生产能力上百吨，灌浆料生产厂家，营销网点遍布全国各地，质量是企业的生存基础，诚信是企业的发展之道",
    },
       
    {
      name: "安平县宏来丝网制品有限公司",
      scNum: 100,
      isFold:true,
      xlNum: 233, 
      img: "http://imgqn.koudaitong.com/upload_files/2014/11/18/FhuatyD1LizfNS2k12Ii888jOf6k.png" ,
      intro: "安平县博帅金属丝网制品厂成立于2005年，位于“丝网之乡”“丝网产业基地”河北省安平县。我厂主要生产：石笼网，格宾网，铅丝笼，雷诺护垫，格宾石笼，电焊石笼网，加筋格网，赛克格宾等。",
      
      goodsList:[
        {
        discount: 6,
        number: 1,
        goodsID: "2",
        goodsName: "",
        imgSrc: "",
        price: "260.00",
        oldPrice: "433.33",
        buynumber: 101,
        className: "钢管",
        detail: "",
        imglist: [
          "",
          "",
          "",
        ]
        }
      ]
    

      
       

      
    
    },
       
    {
      name: "天津市芳华通讯工程有限公司",
      scNum: 1210,
      isFold:true,
      xlNum: 126, 
      img: "http://img.yzcdn.cn/upload_files/2015/05/15/FvbfutB8-cKAr7IJAAHsVyoh7OA0.jpg" ,
      intro:" 天津市芳华通讯工程有限公司成立于1999年，坐落于天津市津南区八里台工业园区内，注册资金18000万元。是生产广播、电视通讯铁塔，微波通讯铁塔，输电线路电力铁塔及相应配套设施的专业民营科技型企业，已经成为我国通信塔行业主要供应商。  ",
       
      
    
    }, 
    {
      name: "河南亮晶晶水处理设备有限公司",
      scNum: 178,
      isFold:true,
      xlNum: 23, 
      img: "http://imgqn.koudaitong.com/upload_files/2015/05/06/Fs3EYQFG6wR0Bp-ldIhnzQ2cXydt.jpg" ,
      intro: "河南亮晶晶水处理设备有限公司是专门致力于环保设备开发、研制、生产、销售、服务于一体以及从事纯水处理设备、环境工程、污水处理的专业化公司。",
    
    },
    {
      name: "山东申澳机械设备有限公司",
      scNum: 100,
      isFold:true,
      xlNum: 226, 
      img: "http://imgqn.koudaitong.com/upload_files/2015/05/28/Fpw7VlqNTl62mO0uk_9xlK2M-SbU.png" ,
      intro: "山东申澳机械设备有限公司是一家集科研开发、生产制造、技术服务于一体的高新技术企业，公司前身为诸城市申澳环保机械厂，成立于2015年01月14号",
    }, 
    {
      name: "山东飞跃光电科技有限公司",
      scNum: 158,
      isFold:true,
      xlNum: 233, 
      img: "http://img.yzcdn.cn/upload_files/2015/02/04/FiMYtk0t4sUZy1Dee3oDi2qPjriz.jpg" ,
      intro: " 山东飞跃光电科技有限公司山东飞跃光电科技有限公司是一家专业从事Led光电产品研发、生产、销售、设计、安装为一体的高新科技企业。",
    }, 
    {
      name: "沧州哲航管道有限公司",
      scNum: 100,
      isFold:true,
      xlNum: 245, 
      img: "http://imgqn.koudaitong.com/upload_files/2014/08/28/FkSwAE3D_1Mmq1BTjX7Uh-cpp9tp.jpg" ,
      intro: "沧州哲航管道有限公司是一家专业生产销售保温管道、防腐管道、大口径螺旋钢管、直缝焊管、以及各种配套管件、法兰于一体的大型钢管企业。",
    }, 
    {
      name: "山东国翔仪表有限公司",
      scNum: 100,
      isFold:true,
      xlNum: 244, 
      img: "http://img.yzcdn.cn/upload_files/2015/05/08/FjLhq_kZ1ij5Y9x5m298ZX4mO5j1.jpg" ,
      intro:"山东国翔仪表有限公司，是一家集科研生产销售机械水表、智能卡式表、光电直读远传水表、热量表及水表配件的现代化的新型企业"
    
    },
  ]
  return list
}

// 商品总列表
function goodsList(){
 var list =[
    {
      discount: 6,
      number: 1,
      goodsID: "2",
      goodsName: "韩都衣舍韩版2015秋装新款女装翻领绣花图案长袖衬衫",
      imgSrc: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=84382490,1584239411&fm=27&gp=0.jpg",
      price: "260.00",
      oldPrice: "433.33",
      buynumber: 101,
      className: "衬衫",
      detail: "产品参数：材质成分: 棉100%。销售渠道类型: 纯电商(只在线上销售)。货号: GW4937。服装版型: 直筒。风格: 通勤。通勤: 韩版。衣长: 常规款。袖长: 长袖。袖型: 衬衫袖。领型: 其他。衣门襟: 单排多扣。图案: 碎花",
      imglist: [
        "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=84382490,1584239411&fm=27&gp=0.jpg",
        "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=272826797,234131395&fm=27&gp=0.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530851984766&di=08658b5e2353cf3776830b5d32cf1024&imgtype=0&src=http%3A%2F%2Fimage.csfz.cn%2Fibank%2F76867001248272.jpg", "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530851984766&di=6aad3e85c7e6099a6bcdf63f35aff0d3&imgtype=0&src=http%3A%2F%2Fimg000.hc360.cn%2Fy4%2FM00%2F38%2F47%2FwKhQiFTwK9KERIhEAAAAAENKa_s084.jpg"
      ]

    },
    {
      number: 1,
      discount: 10,
      goodsID: "3",
      goodsName: "韩都衣舍长袖衬衫",
      imgSrc: "http://img.alicdn.com/bao/uploaded/i4/TB1QP0gJpXXXXczXpXXXXXXXXXX_!!0-item_pic.jpg_b.jpg",
      price: "198.00",
      oldPrice: "198.00",
      buynumber: 311,
      className: "衬衫",
      detail: "材质成分: 棉55% 聚酯纤维45%。销售渠道类型: 纯电商(只在线上销售)。货号: AA5041。服装版型: 直筒。风格: 通勤。通勤: 韩版。",
      imglist: [
        "http://img.alicdn.com/bao/uploaded/i4/TB1QP0gJpXXXXczXpXXXXXXXXXX_!!0-item_pic.jpg_b.jpg",
        "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=272826797,234131395&fm=27&gp=0.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530851984766&di=08658b5e2353cf3776830b5d32cf1024&imgtype=0&src=http%3A%2F%2Fimage.csfz.cn%2Fibank%2F76867001248272.jpg", "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530851984766&di=6aad3e85c7e6099a6bcdf63f35aff0d3&imgtype=0&src=http%3A%2F%2Fimg000.hc360.cn%2Fy4%2FM00%2F38%2F47%2FwKhQiFTwK9KERIhEAAAAAENKa_s084.jpg"
      ]
    },
    {
      number: 1,
      discount: 8,
      goodsID: "12",
      goodsName: "男士修身商务正装",
      imgSrc: "https://static.zara-static.cn/photos///2018/V/T/2/p/7387/410/401/2/w/560/7387410401_1_1_1.jpg?ts=1520951904184",
      price: "140.00",
      oldPrice: "175.00",
      buynumber: 100,
      className: "礼服",
      detail: "工艺/流行细分风格：商务正装。关键信息上市年份季节：2015年春季",
      imglist: [
        "https://static.zara-static.cn/photos///2018/V/T/2/p/7387/410/401/2/w/560/7387410401_1_1_1.jpg?ts=1520951904184",
        "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=272826797,234131395&fm=27&gp=0.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530851984766&di=08658b5e2353cf3776830b5d32cf1024&imgtype=0&src=http%3A%2F%2Fimage.csfz.cn%2Fibank%2F76867001248272.jpg", "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530851984766&di=6aad3e85c7e6099a6bcdf63f35aff0d3&imgtype=0&src=http%3A%2F%2Fimg000.hc360.cn%2Fy4%2FM00%2F38%2F47%2FwKhQiFTwK9KERIhEAAAAAENKa_s084.jpg"

      ]

    },
    {
      number: 1,
      discount: 9,
      goodsID: "19",
      goodsName: "伴娘礼服短款打底连衣裙",
      imgSrc: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530850485430&di=b2827f6790f2d0fff3fd8206da60c6d4&imgtype=0&src=http%3A%2F%2Fs3.sinaimg.cn%2Fmw690%2F006bCkaxgy6VvbpI8Uid2%26690",
      price: "115.00",
      oldPrice: "127.78",
      buynumber: 100,
      className: "礼服",
      detail: " 商品名称：2015秋季新款名媛气质钉珠伴娘礼服短款打底连衣裙性感高领包臀裙；韩国进口弹力天丝棉 ，袖管是双层网纱+蕾丝，很精致，奶牛丝内衬，带胸垫 ，胸口前面是睫毛蕾丝，领边的蕾丝出单独做出了一层拉须，这种拉须是用单独的机器切割出来的哦，很重工，半身的钉珠全手工缝制，全部都是进口珠子和钻，光泽度好",
      imglist: [
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530850485430&di=b2827f6790f2d0fff3fd8206da60c6d4&imgtype=0&src=http%3A%2F%2Fs3.sinaimg.cn%2Fmw690%2F006bCkaxgy6VvbpI8Uid2%26690",
        "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=272826797,234131395&fm=27&gp=0.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530851984766&di=08658b5e2353cf3776830b5d32cf1024&imgtype=0&src=http%3A%2F%2Fimage.csfz.cn%2Fibank%2F76867001248272.jpg", "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530851984766&di=6aad3e85c7e6099a6bcdf63f35aff0d3&imgtype=0&src=http%3A%2F%2Fimg000.hc360.cn%2Fy4%2FM00%2F38%2F47%2FwKhQiFTwK9KERIhEAAAAAENKa_s084.jpg"

      ]

    },
    {
      number: 1,
      discount: 8,
      goodsID: "24",
      goodsName: "大码韩版棉袄羊羔毛外套",
      imgSrc: "http://img007.hc360.cn/hb/MTQ2MDczMjU3OTAxMzkxMjI0NDU1Mw==.jpg",
      price: "79.90",
      oldPrice: "99.88",
      buynumber: 100,
      className: "棉服",
      detail: "品牌: other/其他服装版型: 修身厚薄: 加厚风格: 甜美甜美: 森女衣长: 常规袖长: 长袖领子: 半开领袖型: 常规衣门襟: 拉链图案: 纯色流行元素/工艺: 蝴蝶结 带毛领 链条 口袋 荷叶边 系带 拼接 绑带 纽扣 拉链面料材质: 棉成分含量: 96%及以上填充物: 棉96%及以上",
      imglist: [
        "http://img007.hc360.cn/hb/MTQ2MDczMjU3OTAxMzkxMjI0NDU1Mw==.jpg",
        "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=272826797,234131395&fm=27&gp=0.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530851984766&di=08658b5e2353cf3776830b5d32cf1024&imgtype=0&src=http%3A%2F%2Fimage.csfz.cn%2Fibank%2F76867001248272.jpg", "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530851984766&di=6aad3e85c7e6099a6bcdf63f35aff0d3&imgtype=0&src=http%3A%2F%2Fimg000.hc360.cn%2Fy4%2FM00%2F38%2F47%2FwKhQiFTwK9KERIhEAAAAAENKa_s084.jpg"

      ]

    },
    {
      number: 1,
      discount: 10,
      goodsID: "33",
      goodsName: "棒球领拉链长袖插袋外套",
      imgSrc: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530850584685&di=f73c4791eea4210eca3b576066bdaf03&imgtype=0&src=http%3A%2F%2Fimg14.360buyimg.com%2Fn0%2Fjfs%2Ft1741%2F78%2F457085803%2F258690%2F95fd6a15%2F55d187a5N9038af26.jpg",
      price: "189.00",
      oldPrice: "189.00",
      buynumber: 100,
      className: "短外套",
      detail: "品牌: Amii组合形式: 单件衣长: 短款袖长: 长袖领子: 其他衣门襟: 拉链图案: 纯色流行元素/工艺: 及简 立体压花年份季节: 2015年秋",
      imglist: [
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530850584685&di=f73c4791eea4210eca3b576066bdaf03&imgtype=0&src=http%3A%2F%2Fimg14.360buyimg.com%2Fn0%2Fjfs%2Ft1741%2F78%2F457085803%2F258690%2F95fd6a15%2F55d187a5N9038af26.jpg",
        "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=272826797,234131395&fm=27&gp=0.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530851984766&di=08658b5e2353cf3776830b5d32cf1024&imgtype=0&src=http%3A%2F%2Fimage.csfz.cn%2Fibank%2F76867001248272.jpg", "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530851984766&di=6aad3e85c7e6099a6bcdf63f35aff0d3&imgtype=0&src=http%3A%2F%2Fimg000.hc360.cn%2Fy4%2FM00%2F38%2F47%2FwKhQiFTwK9KERIhEAAAAAENKa_s084.jpg"

      ]

    },
    {
      number: 1,
      discount: 8,
      goodsID: "39",
      goodsName: "修身休闲短外套",
      imgSrc: "https://img.alicdn.com/bao/uploaded/i2/TB1yeBJJXXXXXa1XXXXXXXXXXXX_!!0-item_pic.jpg_b.jpg",
      price: "128.00",
      oldPrice: "160.00",
      buynumber: 100,
      className: "短外套",
      detail: "品牌: 法彩龙组合形式: 单件衣长: 短款袖长: 长袖领子: POLO领袖型: 常规衣门襟: 双排扣图案: 纯色流行元素/工艺: 口袋 绑带 纽扣",
      imglist: [
        "https://img.alicdn.com/bao/uploaded/i2/TB1yeBJJXXXXXa1XXXXXXXXXXXX_!!0-item_pic.jpg_b.jpg",
        "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=272826797,234131395&fm=27&gp=0.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530851984766&di=08658b5e2353cf3776830b5d32cf1024&imgtype=0&src=http%3A%2F%2Fimage.csfz.cn%2Fibank%2F76867001248272.jpg", "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530851984766&di=6aad3e85c7e6099a6bcdf63f35aff0d3&imgtype=0&src=http%3A%2F%2Fimg000.hc360.cn%2Fy4%2FM00%2F38%2F47%2FwKhQiFTwK9KERIhEAAAAAENKa_s084.jpg"

      ]

    },
    {
      number: 1,
      discount: 6,
      goodsID: "43",
      goodsName: "2015韩国东大门女装秋冬季新款波点圆领长袖百搭卫衣",
      imgSrc: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3586828173,1838912797&fm=27&gp=0.jpg",
      price: "89.00",
      oldPrice: "148.33",
      buynumber: 100,
      className: "卫衣",
      detail: "内胆类型: 棉内胆货号: C051服装版型: 宽松厚薄: 常规风格: 通勤通勤: 韩版款式: 套头组合形式: 单件衣长: 常规袖长: 长袖领子: 圆领袖型: 常规图案: 圆点服装款式细节: 印花 拼接面料材质: 其他成分含量: 71%(含)-80%(含)适用年龄: 18-24周岁年份季节: 2015年秋季颜色分类: 白色 灰色尺码: S M L",
      imglist: [
        "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3586828173,1838912797&fm=27&gp=0.jpg",
        "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=272826797,234131395&fm=27&gp=0.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530851984766&di=08658b5e2353cf3776830b5d32cf1024&imgtype=0&src=http%3A%2F%2Fimage.csfz.cn%2Fibank%2F76867001248272.jpg", "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530851984766&di=6aad3e85c7e6099a6bcdf63f35aff0d3&imgtype=0&src=http%3A%2F%2Fimg000.hc360.cn%2Fy4%2FM00%2F38%2F47%2FwKhQiFTwK9KERIhEAAAAAENKa_s084.jpg"

      ]
    },
    {
      number: 1,
      discount: 8,
      goodsID: "52",
      goodsName: "韩版女式宽松套头破洞牛仔长袖连帽卫衣",
      imgSrc: "http://s18.mogucdn.com/p1/151021/11gcxq_ie4tqojzmvsgezrvgqzdambqgqyde_640x960.jpg_220x330.webp",
      price: "99.00",
      oldPrice: "123.75",
      buynumber: 206,
      className: "卫衣",
      detail: "TB02哈哈~这款卫衣是秋季的最爱 减龄款哦 牛仔袖拼接设计，加上袖子上个性磨破和刺绣的勋章图案，整体上看满满的都是街头潮流原宿风格，上身效果酷酷哒！衣服的版型属于宽松型的，穿着效果无束缚力，很洋气很洋气哦 粉色比较衬肤色小清新的感觉 黑色也足够帅气，今年时尚大咖们必备的减龄装备，推荐入~",
      imglist: [
        "http://s18.mogucdn.com/p1/151021/11gcxq_ie4tqojzmvsgezrvgqzdambqgqyde_640x960.jpg_220x330.webp",
        "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=272826797,234131395&fm=27&gp=0.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530851984766&di=08658b5e2353cf3776830b5d32cf1024&imgtype=0&src=http%3A%2F%2Fimage.csfz.cn%2Fibank%2F76867001248272.jpg", "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530851984766&di=6aad3e85c7e6099a6bcdf63f35aff0d3&imgtype=0&src=http%3A%2F%2Fimg000.hc360.cn%2Fy4%2FM00%2F38%2F47%2FwKhQiFTwK9KERIhEAAAAAENKa_s084.jpg"

      ]
    },
    {
      number: 1,
      discount: 8,
      goodsID: "57",
      goodsName: "波司登（BOSIDENG）羽绒服男款",
      imgSrc: "http://img14.360buyimg.com/n2/jfs/t2257/88/581178076/140752/3173e831/5618c255Nc944c200.jpg",
      price: "899.00",
      oldPrice: "1123.75",
      buynumber: 108,
      className: "棉服",
      detail: "商品产地：中国大陆 人群：青年衣门襟 ：前中拉链门襟衣长：短款含绒量：90%以上灰鸭绒领型：可脱卸帽流行元素：多口袋风格：商务休闲颜色：其他",
      imglist: [
        "http://img14.360buyimg.com/n2/jfs/t2257/88/581178076/140752/3173e831/5618c255Nc944c200.jpg",
        "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=272826797,234131395&fm=27&gp=0.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530851984766&di=08658b5e2353cf3776830b5d32cf1024&imgtype=0&src=http%3A%2F%2Fimage.csfz.cn%2Fibank%2F76867001248272.jpg", "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530851984766&di=6aad3e85c7e6099a6bcdf63f35aff0d3&imgtype=0&src=http%3A%2F%2Fimg000.hc360.cn%2Fy4%2FM00%2F38%2F47%2FwKhQiFTwK9KERIhEAAAAAENKa_s084.jpg"

      ]
    }
  ]

  return list
}

// 衬衫
function chenshanList(){
  var list = [
    {
      number: 1,
      discount: 6,
      goodsID: "2",
      goodsName: "韩都衣舍韩版2015秋装新款女装翻领绣花图案长袖衬衫",
      imgSrc: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=84382490,1584239411&fm=27&gp=0.jpg",
      price: "260.00",
      oldPrice: "433.33",
      buynumber: 101,
      className: "衬衫",
      detail: "产品参数：材质成分: 棉100%。销售渠道类型: 纯电商(只在线上销售)。货号: GW4937。服装版型: 直筒。风格: 通勤。通勤: 韩版。衣长: 常规款。袖长: 长袖。袖型: 衬衫袖。领型: 其他。衣门襟: 单排多扣。图案: 碎花",
      imglist: [
        "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=84382490,1584239411&fm=27&gp=0.jpg",
        "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=272826797,234131395&fm=27&gp=0.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530851984766&di=08658b5e2353cf3776830b5d32cf1024&imgtype=0&src=http%3A%2F%2Fimage.csfz.cn%2Fibank%2F76867001248272.jpg", "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530851984766&di=6aad3e85c7e6099a6bcdf63f35aff0d3&imgtype=0&src=http%3A%2F%2Fimg000.hc360.cn%2Fy4%2FM00%2F38%2F47%2FwKhQiFTwK9KERIhEAAAAAENKa_s084.jpg"
      ]

    },
    {
      number: 1,
      discount: 10,
      goodsID: "3",
      goodsName: "韩都衣舍长袖衬衫",
      imgSrc: "http://img.alicdn.com/bao/uploaded/i4/TB1QP0gJpXXXXczXpXXXXXXXXXX_!!0-item_pic.jpg_b.jpg",
      price: "198.00",
      oldPrice: "198.00",
      buynumber: 311,
      className: "衬衫",
      detail: "材质成分: 棉55% 聚酯纤维45%。销售渠道类型: 纯电商(只在线上销售)。货号: AA5041。服装版型: 直筒。风格: 通勤。通勤: 韩版。",
      imglist: [
        "http://img.alicdn.com/bao/uploaded/i4/TB1QP0gJpXXXXczXpXXXXXXXXXX_!!0-item_pic.jpg_b.jpg",
        "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=272826797,234131395&fm=27&gp=0.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530851984766&di=08658b5e2353cf3776830b5d32cf1024&imgtype=0&src=http%3A%2F%2Fimage.csfz.cn%2Fibank%2F76867001248272.jpg", "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530851984766&di=6aad3e85c7e6099a6bcdf63f35aff0d3&imgtype=0&src=http%3A%2F%2Fimg000.hc360.cn%2Fy4%2FM00%2F38%2F47%2FwKhQiFTwK9KERIhEAAAAAENKa_s084.jpg"
      ]
    },
  ]

  return list

}

// 男装
function nanzhuangList(){
  var list=[
    {
      number: 1,
      discount: 8,
      goodsID: "12",
      goodsName: "男士修身商务正装",
      imgSrc: "https://static.zara-static.cn/photos///2018/V/T/2/p/7387/410/401/2/w/560/7387410401_1_1_1.jpg?ts=1520951904184",
      price: "140.00",
      oldPrice: "175.00",
      buynumber: 100,
      className: "礼服",
      detail: "工艺/流行细分风格：商务正装。关键信息上市年份季节：2015年春季",
      imglist: [
        "https://static.zara-static.cn/photos///2018/V/T/2/p/7387/410/401/2/w/560/7387410401_1_1_1.jpg?ts=1520951904184",
        "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=272826797,234131395&fm=27&gp=0.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530851984766&di=08658b5e2353cf3776830b5d32cf1024&imgtype=0&src=http%3A%2F%2Fimage.csfz.cn%2Fibank%2F76867001248272.jpg", "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530851984766&di=6aad3e85c7e6099a6bcdf63f35aff0d3&imgtype=0&src=http%3A%2F%2Fimg000.hc360.cn%2Fy4%2FM00%2F38%2F47%2FwKhQiFTwK9KERIhEAAAAAENKa_s084.jpg"

      ]

    },
    {
      number: 1,
      discount: 10,
      goodsID: "33",
      goodsName: "棒球领拉链长袖插袋外套",
      imgSrc: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530850584685&di=f73c4791eea4210eca3b576066bdaf03&imgtype=0&src=http%3A%2F%2Fimg14.360buyimg.com%2Fn0%2Fjfs%2Ft1741%2F78%2F457085803%2F258690%2F95fd6a15%2F55d187a5N9038af26.jpg",
      price: "189.00",
      oldPrice: "189.00",
      buynumber: 100,
      className: "短外套",
      detail: "品牌: Amii组合形式: 单件衣长: 短款袖长: 长袖领子: 其他衣门襟: 拉链图案: 纯色流行元素/工艺: 及简 立体压花年份季节: 2015年秋",
      imglist: [
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530850584685&di=f73c4791eea4210eca3b576066bdaf03&imgtype=0&src=http%3A%2F%2Fimg14.360buyimg.com%2Fn0%2Fjfs%2Ft1741%2F78%2F457085803%2F258690%2F95fd6a15%2F55d187a5N9038af26.jpg",
        "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=272826797,234131395&fm=27&gp=0.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530851984766&di=08658b5e2353cf3776830b5d32cf1024&imgtype=0&src=http%3A%2F%2Fimage.csfz.cn%2Fibank%2F76867001248272.jpg", "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530851984766&di=6aad3e85c7e6099a6bcdf63f35aff0d3&imgtype=0&src=http%3A%2F%2Fimg000.hc360.cn%2Fy4%2FM00%2F38%2F47%2FwKhQiFTwK9KERIhEAAAAAENKa_s084.jpg"

      ]

    },
    {
      number: 1,
      discount: 8,
      goodsID: "57",
      goodsName: "波司登（BOSIDENG）羽绒服男款",
      imgSrc: "http://img14.360buyimg.com/n2/jfs/t2257/88/581178076/140752/3173e831/5618c255Nc944c200.jpg",
      price: "899.00",
      oldPrice: "1123.75",
      buynumber: 108,
      className: "棉服",
      detail: "商品产地：中国大陆 人群：青年衣门襟 ：前中拉链门襟衣长：短款含绒量：90%以上灰鸭绒领型：可脱卸帽流行元素：多口袋风格：商务休闲颜色：其他",
      imglist: [
        "http://img14.360buyimg.com/n2/jfs/t2257/88/581178076/140752/3173e831/5618c255Nc944c200.jpg",
        "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=272826797,234131395&fm=27&gp=0.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530851984766&di=08658b5e2353cf3776830b5d32cf1024&imgtype=0&src=http%3A%2F%2Fimage.csfz.cn%2Fibank%2F76867001248272.jpg", "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530851984766&di=6aad3e85c7e6099a6bcdf63f35aff0d3&imgtype=0&src=http%3A%2F%2Fimg000.hc360.cn%2Fy4%2FM00%2F38%2F47%2FwKhQiFTwK9KERIhEAAAAAENKa_s084.jpg"

      ]
    }

  ]


  return list
}

//礼服
function lifuList() {
  var list =[
    {
        number: 1,
      discount: 9,
      goodsID: "19",
      goodsName: "伴娘礼服短款打底连衣裙",
      imgSrc: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530850485430&di=b2827f6790f2d0fff3fd8206da60c6d4&imgtype=0&src=http%3A%2F%2Fs3.sinaimg.cn%2Fmw690%2F006bCkaxgy6VvbpI8Uid2%26690",
      price: "115.00",
      oldPrice: "127.78",
      buynumber: 100,
      className: "礼服",
      detail: " 商品名称：2015秋季新款名媛气质钉珠伴娘礼服短款打底连衣裙性感高领包臀裙；韩国进口弹力天丝棉 ，袖管是双层网纱+蕾丝，很精致，奶牛丝内衬，带胸垫 ，胸口前面是睫毛蕾丝，领边的蕾丝出单独做出了一层拉须，这种拉须是用单独的机器切割出来的哦，很重工，半身的钉珠全手工缝制，全部都是进口珠子和钻，光泽度好",
      imglist: [
          "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530850485430&di=b2827f6790f2d0fff3fd8206da60c6d4&imgtype=0&src=http%3A%2F%2Fs3.sinaimg.cn%2Fmw690%2F006bCkaxgy6VvbpI8Uid2%26690",
      "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=272826797,234131395&fm=27&gp=0.jpg",
      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530851984766&di=08658b5e2353cf3776830b5d32cf1024&imgtype=0&src=http%3A%2F%2Fimage.csfz.cn%2Fibank%2F76867001248272.jpg", "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530851984766&di=6aad3e85c7e6099a6bcdf63f35aff0d3&imgtype=0&src=http%3A%2F%2Fimg000.hc360.cn%2Fy4%2FM00%2F38%2F47%2FwKhQiFTwK9KERIhEAAAAAENKa_s084.jpg"

        ]

},
    ]
  return list
}

// 棉服
function mianfuList() {
  var list =[
    {
          number: 1,
      discount: 8,
      goodsID: "24",
      goodsName: "大码韩版棉袄羊羔毛外套",
      imgSrc: "http://img007.hc360.cn/hb/MTQ2MDczMjU3OTAxMzkxMjI0NDU1Mw==.jpg",
      price: "79.90",
      oldPrice: "99.88",
      buynumber: 100,
      className: "棉服",
      detail: "品牌: other/其他服装版型: 修身厚薄: 加厚风格: 甜美甜美: 森女衣长: 常规袖长: 长袖领子: 半开领袖型: 常规衣门襟: 拉链图案: 纯色流行元素/工艺: 蝴蝶结 带毛领 链条 口袋 荷叶边 系带 拼接 绑带 纽扣 拉链面料材质: 棉成分含量: 96%及以上填充物: 棉96%及以上",
      imglist: [
            "http://img007.hc360.cn/hb/MTQ2MDczMjU3OTAxMzkxMjI0NDU1Mw==.jpg",
      "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=272826797,234131395&fm=27&gp=0.jpg",
      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530851984766&di=08658b5e2353cf3776830b5d32cf1024&imgtype=0&src=http%3A%2F%2Fimage.csfz.cn%2Fibank%2F76867001248272.jpg", "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530851984766&di=6aad3e85c7e6099a6bcdf63f35aff0d3&imgtype=0&src=http%3A%2F%2Fimg000.hc360.cn%2Fy4%2FM00%2F38%2F47%2FwKhQiFTwK9KERIhEAAAAAENKa_s084.jpg"

          ]

},
{
  number: 1,
    discount: 8,
      goodsID: "57",
      goodsName: "波司登（BOSIDENG）羽绒服男款",
      imgSrc: "http://img14.360buyimg.com/n2/jfs/t2257/88/581178076/140752/3173e831/5618c255Nc944c200.jpg",
      price: "899.00",
      oldPrice: "1123.75",
      buynumber: 108,
      className: "棉服",
      detail: "商品产地：中国大陆 人群：青年衣门襟 ：前中拉链门襟衣长：短款含绒量：90%以上灰鸭绒领型：可脱卸帽流行元素：多口袋风格：商务休闲颜色：其他",
      imglist: [                   "http://img14.360buyimg.com/n2/jfs/t2257/88/581178076/140752/3173e831/5618c255Nc944c200.jpg",
                        "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=272826797,234131395&fm=27&gp=0.jpg",
                        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530851984766&di=08658b5e2353cf3776830b5d32cf1024&imgtype=0&src=http%3A%2F%2Fimage.csfz.cn%2Fibank%2F76867001248272.jpg", "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530851984766&di=6aad3e85c7e6099a6bcdf63f35aff0d3&imgtype=0&src=http%3A%2F%2Fimg000.hc360.cn%2Fy4%2FM00%2F38%2F47%2FwKhQiFTwK9KERIhEAAAAAENKa_s084.jpg"

                      ]
 }
]
  return list
}


// 卫衣
function weiyiList() {
  var list = [
    {
            number: 1,
      discount: 6,
      goodsID: "43",
      goodsName: "2015韩国东大门女装秋冬季新款波点圆领长袖百搭卫衣",
      imgSrc: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3586828173,1838912797&fm=27&gp=0.jpg",
      price: "89.00",
      oldPrice: "148.33",
      buynumber: 100,
      className: "卫衣",
      detail: "内胆类型: 棉内胆货号: C051服装版型: 宽松厚薄: 常规风格: 通勤通勤: 韩版款式: 套头组合形式: 单件衣长: 常规袖长: 长袖领子: 圆领袖型: 常规图案: 圆点服装款式细节: 印花 拼接面料材质: 其他成分含量: 71%(含)-80%(含)适用年龄: 18-24周岁年份季节: 2015年秋季颜色分类: 白色 灰色尺码: S M L",
      imglist: [
              "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3586828173,1838912797&fm=27&gp=0.jpg",
      "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=272826797,234131395&fm=27&gp=0.jpg",
      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530851984766&di=08658b5e2353cf3776830b5d32cf1024&imgtype=0&src=http%3A%2F%2Fimage.csfz.cn%2Fibank%2F76867001248272.jpg", "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530851984766&di=6aad3e85c7e6099a6bcdf63f35aff0d3&imgtype=0&src=http%3A%2F%2Fimg000.hc360.cn%2Fy4%2FM00%2F38%2F47%2FwKhQiFTwK9KERIhEAAAAAENKa_s084.jpg"

            ]
},
{
  number: 1,
    discount: 8,
      goodsID: "52",
        goodsName: "韩版女式宽松套头破洞牛仔长袖连帽卫衣",
          imgSrc: "http://s18.mogucdn.com/p1/151021/11gcxq_ie4tqojzmvsgezrvgqzdambqgqyde_640x960.jpg_220x330.webp",
            price: "99.00",
              oldPrice: "123.75",
                buynumber: 206,
                  className: "卫衣",
                    detail: "TB02哈哈~这款卫衣是秋季的最爱 减龄款哦 牛仔袖拼接设计，加上袖子上个性磨破和刺绣的勋章图案，整体上看满满的都是街头潮流原宿风格，上身效果酷酷哒！衣服的版型属于宽松型的，穿着效果无束缚力，很洋气很洋气哦 粉色比较衬肤色小清新的感觉 黑色也足够帅气，今年时尚大咖们必备的减龄装备，推荐入~",
                      imglist: [
                        "http://s18.mogucdn.com/p1/151021/11gcxq_ie4tqojzmvsgezrvgqzdambqgqyde_640x960.jpg_220x330.webp",
                        "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=272826797,234131395&fm=27&gp=0.jpg",
                        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530851984766&di=08658b5e2353cf3776830b5d32cf1024&imgtype=0&src=http%3A%2F%2Fimage.csfz.cn%2Fibank%2F76867001248272.jpg", "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530851984766&di=6aad3e85c7e6099a6bcdf63f35aff0d3&imgtype=0&src=http%3A%2F%2Fimg000.hc360.cn%2Fy4%2FM00%2F38%2F47%2FwKhQiFTwK9KERIhEAAAAAENKa_s084.jpg"

                      ]
},
]
  return list
}


// 短外套
function duanwaitaoList() {
  var list =[
    {
      number: 1,
      discount: 8,
      goodsID: "39",
      goodsName: "修身休闲短外套",
      imgSrc: "https://img.alicdn.com/bao/uploaded/i2/TB1yeBJJXXXXXa1XXXXXXXXXXXX_!!0-item_pic.jpg_b.jpg",
      price: "128.00",
      oldPrice: "160.00",
      buynumber: 100,
      className: "短外套",
      detail: "品牌: 法彩龙组合形式: 单件衣长: 短款袖长: 长袖领子: POLO领袖型: 常规衣门襟: 双排扣图案: 纯色流行元素/工艺: 口袋 绑带 纽扣",
      imglist: [
      "https://img.alicdn.com/bao/uploaded/i2/TB1yeBJJXXXXXa1XXXXXXXXXXXX_!!0-item_pic.jpg_b.jpg",
      "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=272826797,234131395&fm=27&gp=0.jpg",
      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530851984766&di=08658b5e2353cf3776830b5d32cf1024&imgtype=0&src=http%3A%2F%2Fimage.csfz.cn%2Fibank%2F76867001248272.jpg", "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530851984766&di=6aad3e85c7e6099a6bcdf63f35aff0d3&imgtype=0&src=http%3A%2F%2Fimg000.hc360.cn%2Fy4%2FM00%2F38%2F47%2FwKhQiFTwK9KERIhEAAAAAENKa_s084.jpg"]
},
]


  return list
}




module.exports = {
  bannerList: bannerList,
  storeList: storeList,
  goodsList: goodsList,
  nanzhuangList: nanzhuangList,
  chenshanList: chenshanList,
  lifuList: lifuList,
  mianfuList: mianfuList,
  weiyiList: weiyiList,
  duanwaitaoList: duanwaitaoList,
}