<template>
  <div class="custom-tree-container">
    <div class="block">
      <p>使用 scoped slot</p>
      <el-tree
        :data="data5"
        show-checkbox
        node-key="id"
        default-expand-all
        :expand-on-click-node="false">
        <span class="custom-tree-node" slot-scope="{ node, data}">
          <span>{{ node.label }}</span>
          <span>
            <el-button
              type="text"
              size="mini"
              @click="() => append(data)">
              增加
            </el-button>
            <el-button
              type="text"
              size="mini"
              @click="() => modify(node,data)">
              修改
            </el-button>
            <el-button
              type="text"
              size="mini"
              @click="() => remove(node, data)">
              删除
            </el-button>
          </span>
        </span>
      </el-tree>
    </div>
  </div>
</template>

<script>
let id = 1000;

export default {
  data() {
    const data = [
      {
        id: 1,
        label: "一级 1",
        children: [
          {
            id: 4,
            label: "二级 1-1",
            children: [
              {
                id: 9,
                label: "三级 1-1-1"
              },
              {
                id: 10,
                label: "三级 1-1-2"
              }
            ]
          }
        ]
      },
      {
        id: 2,
        label: "一级 2",
        children: [
          {
            id: 5,
            label: "二级 2-1"
          },
          {
            id: 6,
            label: "二级 2-2"
          }
        ]
      },
      {
        id: 3,
        label: "一级 3",
        children: [
          {
            id: 7,
            label: "二级 3-1"
          },
          {
            id: 8,
            label: "二级 3-2"
          }
        ]
      }
    ];
    return {
      data5: JSON.parse(JSON.stringify(data)),
      flag:true,
    };
  },

  methods: {
    append(data) {
      const newChild = { id: id++, label: "testtest" };
      if (!data.children) {
        this.$set(data, "children", []);
      }
      data.children.push(newChild);
    },
    modify(node, data){
      const parent = node.parent;
      const children = parent.data.children || parent.data;
      data['label']='12345';
      console.log(this.data5);

    },
    remove(node, data) {
      const parent = node.parent;
      const children = parent.data.children || parent.data;
      if (typeof data.children == "undefined") {
        const index = children.findIndex(d => d.id === data.id);
        children.splice(index, 1);
      } else {
        if (data.children.length === 0) {
          const index = children.findIndex(d => d.id === data.id);
          children.splice(index, 1);
        }
      }
      console.log(this.data5);
    },

    renderContent(h, { node, data, store }) {
      return (
        <span class="custom-tree-node">
          <span>{node.label}</span>
          <span>
            <el-button
              size="mini"
              type="text"
              on-click={() => this.append(data)}
            >
              Append
            </el-button>
            <el-button
              size="mini"
              type="text"
              on-click={() => this.remove(node, data)}
            >
              Delete
            </el-button>
          </span>
        </span>
      );
    }
  }
};
</script>

<style scoped>
.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}
</style>
