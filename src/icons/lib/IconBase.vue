<script>
import { h } from "vue";
import { IconContext, Tree2Element } from "./index";

export default {
  name: "icon",
  props: {
    children: Object,
    ...IconContext,
  },
  render() {
    return h(
      "svg",
      {
        stroke: "currentColor",
        fill: "currentColor",
        xmlns: "http://www.w3.org/2000/svg",
        height: this.computedSize,
        width: this.computedSize,
        "stroke-width": "0",
      },
      Tree2Element(this.$props.children)
    );
  },
  computed: {
    computedSize() {
      return this.$props.size || "1em";
    },
    currentColor() {
      return "currentColor";
    },
  },
};
</script>