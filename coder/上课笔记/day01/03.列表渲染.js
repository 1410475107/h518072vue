import Vue from 'vue';

let vm = new Vue({
    el: '#app',
    data: {
        list: ['吴豪', '杨丹', '赵佳培'],
        list1: [{
            name: '吴豪',
            age: 20,
            gender: '女'
        }, 
        {
            name: '杨丹',
            age: 20,
            gender: '女'
        }, 
        {
            name: '赵佳培',
            age: 20,
            gender: '男'
        }],
        objdata:{
            cname:'H518072',
            nums:40,
            add:'科华北路57号'
        },
        binfo:{
            cname:'班级名称',
            nums:'人数',
            add:'上课地址'
        }

    }
});