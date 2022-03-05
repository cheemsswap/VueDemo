import { reactive, onMounted, onBeforeUnmount } from "vue";
export default () => {
    const point = reactive({
        x: 0,
        y: 0,
    });
    function getMousePoint(e) {
        point.x = e.pageX;
        point.y = e.pageY;
        console.log(e.pageX + "," + e.pageY);
    }
    onMounted(() => {
        window.addEventListener("click", getMousePoint);
    });
    onBeforeUnmount(() => {
        removeEventListener("click", getMousePoint);
    });
    return point;
}