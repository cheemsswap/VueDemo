
//当数据冲突或者方法冲突的时候 以vue文件里面的为主
//但是 生命周期钩子为合并

export const mixin1 = {
    methods: {
        showName() {
            alert(this.name);
        },
    }
}

export const mixin2 = {
    data() {
        return {
            x: 1,
            y: 2
        }
    }
}
