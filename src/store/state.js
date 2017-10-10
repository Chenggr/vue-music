import {playMode} from 'common/js/config'

const state = {
  singer: {},                // 歌手
  playing: false,            // 播放状态
  fullScreen: false,         // 满屏
  playlist: [],              // 播放列表
  sequenceList: [],          // 顺序播放列表
  mode: playMode.sequence,   // 播放模式
  currentIndex: -1,          // 当前播放索引
  disc: {},                  // 首页列表数据
  topList: {}                // 排行列表数据
}

export default state
