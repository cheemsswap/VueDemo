export const addFather = {
    methods: {
        addFather(val) {
            this.$parent.money += val;
            this.money -= val;
        }
    }
}
export const subFather = {
    methods: {
        subFather(val) {
            this.$parent.money -= val;
            this.money += val;
        }
    }
}