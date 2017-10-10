import {mapGetters} from 'vuex'

// 处理有miniplayer时，容器底部距离
export const playlistMixin = {
  computed: {
    ...mapGetters([
      'playlist'
    ])
  },

  mounted () {
    this.handlePlaylist(this.playlist)
  },
  activated() { // keep-alive 组件激活时调用
    this.handlePlaylist(this.playlist)
  },
  watch: {
    playlist(newVal) {
      this.handlePlaylist(newVal)
    }
  },
  methods: {
    handlePlaylist() {
      throw new Error('component must implement handlePlaylist method')
    }
  }
}
