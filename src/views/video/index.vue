<template>
<div>
    <div style="padding-left:25%;padding-top:20px;padding-bottom:20px;">
        <video-player  class="vjs-custom-skin"
          ref="videoPlayer"
          :options="playerOptions"
          :playsinline="true"
          @play="onPlayerPlay($event)"
          @pause="onPlayerPause($event)"
          @ended="onPlayerEnded($event)"
          @loadeddata="onPlayerLoadeddata($event)"
          @waiting="onPlayerWaiting($event)"
          @playing="onPlayerPlaying($event)"
          @timeupdate="onPlayerTimeupdate($event)"
          @canplay="onPlayerCanplay($event)"
          @canplaythrough="onPlayerCanplaythrough($event)"
          @ready="playerReadied"
          @statechanged="playerStateChanged($event)">
        </video-player>
    </div>
    <to-home></to-home>
</div>
</template>

<script>
export default {
    data() {
      return {
        // videojs options
        playerOptions:{
          height: '360',
          autoplay: false,
          muted: false,
          language: 'en',
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: [{
            type: "video/mp4",
            // src: "http://vjs.zencdn.net/v/oceans.mp4",
            src: "https://cdn.aimeike.tv/thumbnail/preview/preview_pRUW9_thumb.mp4?auth_key=1539374586-0-0-26c79db5e9ac25538be424673522f5ff",
          }],
          poster: "https://surmon-china.github.io/vue-quill-editor/static/images/surmon-1.jpg",
        }
      }
    },
    mounted() {
      setTimeout(() => {
        this.player.muted(false)
      }, 5000)
    },
    computed: {
      player() {
        return this.$refs.videoPlayer.player
      }
    },
    methods: {
      // listen event
      onPlayerPlay(player) {
          console.info(player);
      },
      onPlayerPause(player) {},
      onPlayerEnded(player) {},
      onPlayerLoadeddata(player) {},
      onPlayerWaiting(player) {},
      onPlayerPlaying(player) {},
      onPlayerTimeupdate(player) {},
      onPlayerCanplay(player) {},
      onPlayerCanplaythrough(player) {},
      // or listen state event
      playerStateChanged(playerCurrentState) {},
      // player is ready
      playerReadied(player) {
        console.log('example player 1 readied', player)
        player.currentTime(10)
      }
    }
  }
</script>