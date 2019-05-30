<template>
  <div class="drone">
    <sd-node-drone-status :node="node" :msg="msg"></sd-node-drone-status>
    <template v-for="{ point, compo } of points">
      <component :is="compo" :key="point.id" :point="point" :status="status"></component>
    </template>
    <sd-map :point="node" :path="path"></sd-map>
    <sd-node-drone-control :node="node" :status="status"></sd-node-drone-control>
  </div>
</template>

<script>
import Status from './status.vue';
import Control from './control.vue';
import Monitor from './monitor.vue';
import NodeMap from '@/components/map/map.vue';

const CompoName = {
  'iframe': Monitor.name,
  'livestream_img': Monitor.name,
  'livestream_flv': Monitor.name,
  'livestream_hls': Monitor.name,
  'livestream_webrtc': Monitor.name
};

export default {
  name: 'sd-node-drone',
  props: {
    node: {
      type: Object,
      required: true
    },
    status: {
      type: Number,
      required: true
    },
    msg: {
      type: Object,
      required: true
    },
    log: {
      type: Array,
      required: true
    },
    position: {
      type: Object,
      required: false
    },
    path: {
      type: Array,
      required: false
    }
  },
  computed: {
    points() {
      return this.node.points.map(point => {
        const compo = CompoName[point.point_type_name] || '';
        return { point, compo };
      });
    }
  },
  components: {
    [Status.name]: Status,
    [Control.name]: Control,
    [NodeMap.name]: NodeMap,
    [Monitor.name]: Monitor
  }
};
</script>