import IconBase from './IconBase.vue';
import { h } from 'vue';

const IconContext = {
	color: {
		type: String,
		default: undefined,
	},
	size: {
		type: String,
		default: undefined,
	},
	className: {
		type: String,
		default: undefined,
	},
	style: {
		type: Object,
		default: undefined,
	},
	attr: {
		type: Object,
		default: undefined,
	},
};

function Tree2Element(tree) {
	return (
		tree &&
		tree.map((node, i) => {
			return h(node.tag, { key: i, ...node.attr });
		})
	);
}

function GenIcon(data) {
	return (props) => (
		<IconBase {...data.attr} {...props} children={data.child}></IconBase>
	);
}

export { IconContext, GenIcon, Tree2Element };
