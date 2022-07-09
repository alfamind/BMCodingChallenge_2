const printItemscount = (count: number): string | null =>
    count > 0
        ? " (" +
          JSON.stringify(count, null, 4) +
          " item" +
          (count > 1 ? "s)" : ")")
        : null;

export default printItemscount;
