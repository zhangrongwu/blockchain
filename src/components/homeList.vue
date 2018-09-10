<template>
    <div class="list">
        <template v-for="item in items">
            <router-link class="thumbnail" :to="{name: 'mine', params: { id: item.id }}" :key="item.id">
                <div class="content">
                    <img :src="item.image_hlarge" alt="cover">
                    <h3>{{item.title}}</h3>
                    <p>{{item.content | subStr}}</p>
                </div>
                <div class="author">
                    <span class="name">{{item.category_name}}</span>
                    <span class="label" v-if="item.subcategory_name">
                        本活动来自栏目: {{item.subcategory_name}}
                    </span>
                </div>
            </router-link>
        </template>
    </div>
</template>

<script>
export default {
    name: "homeList",
    props: {
        mold: {
            type: String,
            default: "basic"
        },
        items: {
            type: Array,
            required: true
        }
    },
    data() {
        return {};
    },
    filters: {
        subStr: function(value) {
            let newVal = value.replace(/<.*?>/g, "");
            return newVal.slice(0, 30);
        }
    }
};
</script>

<style lang='scss' scoped>
.list {
    margin: 0px 0 56px 0;
    .thumbnail {
        position: relative;
        display: block;
        padding: 0.5rem 0.5rem 0.5rem 0;
        margin-left: 10px;

        .content {
            overflow: hidden;
            margin-bottom: 15px;
        }

        h3 {
            margin-top: 0;
            margin-bottom: 0.6rem;
            line-height: 1.41;
            text-align: justify;
            font-size: 14 px;
            font-weight: 500px;
            color: #494949;
        }

        p {
            line-height: 1.5;
            text-align: justify;
            color: #aaa;
            font-size: 13px;
            overflow: hidden;
        }

        img {
            float: right;
            width: 100px;
            height: 150px;
            margin-left: 15px;
        }

        .author {
            font-size: 14px;
            color: #ccc;
        }
        .name {
            position: absolute;
            bottom: 10px;
            left: 0px;
        }

        .label {
            position: absolute;
            bottom: 10px;
            right: 20px;
        }
    }

    .thumbnail ~ .thumbnail::before {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 0.1rem;
        content: "";
        background: #e3e3e3;
    }

    .basic {
        h3 {
            padding: 0;
            line-height: 1.41;
            font-size: 14px;
            font-weight: 500;
            color: #494949;
        }

        .info {
            margin-top: 0.5rem;
            font-size: 14px;
            color: #42bd56;
        }
    }
}
</style>
