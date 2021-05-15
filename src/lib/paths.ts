export function getPaginationPaths(pagesCount: number) {
  return Array.from(
    { length: pagesCount },
    (_, index) => {
      return {
        params: {
          id: (index + 1).toString()
        }
      };
    }
  );
}