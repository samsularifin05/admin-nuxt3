import { ref, onMounted, onUnmounted } from "vue";

export const calculateWindowSize = (windowWidth: number) => {
  if (windowWidth >= 1200) {
    return "lg";
  }
  if (windowWidth >= 992) {
    return "md";
  }
  if (windowWidth >= 768) {
    return "sm";
  }
  return "xs";
};

export function useWindowSize() {
  const width = ref(typeof window !== "undefined" ? window.innerWidth : 0);
  const height = ref(typeof window !== "undefined" ? window.innerHeight : 0);

  const handleResize = () => {
    width.value = window.innerWidth;
    height.value = window.innerHeight;
  };

  onMounted(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
  });

  onUnmounted(() => {
    window.removeEventListener("resize", handleResize);
  });

  return { width, height };
}
