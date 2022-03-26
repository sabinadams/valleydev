export const scrollToNext = (id: string) => {
  document?.querySelector(`#${id}`)?.scrollIntoView({
    behavior: "smooth",
  });
};
