export const useBeforeLeave = (onBefore) => {
  const handle = (event) => {
    const { clientY } = event;
    if (clientY <= 0) {
      onBefore();
    }
  };
  useEffect(() => {
    if (typeof onBefore === "function") {
      // << 이 처럼 useEffect 안에 if 문을 아래처럼 넣어보세요
      document.addEventListener("mouseleave", handle);
      return () => document.removeEventListener("mouseleave", handle);
    } else {
      return;
    }
  }, []);
};
