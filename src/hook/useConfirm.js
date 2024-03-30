const useConfirm = (msg = "", onConfirm, onCancel) => {
  if (!onConfirm) {
    return;
  }
  if (onCancel) {
    return;
  }

  const confirmEvent = () => {
    /* eslint-disable no-restricted-globals */
    if (confirm(msg)) {
      onConfirm();
    } else {
      onCancel();
    }
  };
  return confirmEvent;
};

export default useConfirm;
