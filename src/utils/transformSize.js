/**
 * B to KB or MB
 * @time 2018/09/01
 * @author lxfriday
 */

export default (bResult) => {
  if (bResult >= 1024) {
    // kb
    const kbResult = bResult / 1024;
    if (kbResult >= 1024) {
      // mb
      const mbResult = kbResult / 1024;
      if (mbResult >= 1024) {
        // gb
        const gbResult = mbResult / 1024;
        if (gbResult >= 1024) {
          // tb
          const tbResult = gbResult / 1024;
          return `${tbResult.toFixed(2)} TB`;
        }
        return `${gbResult.toFixed(2)} GB`;
      }
      return `${mbResult.toFixed(2)} MB`;
    }
    return `${kbResult.toFixed(2)} KB`;
  }
  return `${bResult.toFixed(2)} B`;
};
