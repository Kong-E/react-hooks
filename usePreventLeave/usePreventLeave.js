export const usePreventLeave = () => {
  const listener = (event) => {
    event.preventDefault();
    console.log(event);
  };
  const enablePrevent = () => window.addEventListener("beforeunload", listener);
  const disablePrevent = () =>
    window.removeEventListener("beforeunload", listener);
  return { enablePrevent, disablePrevent };
};
