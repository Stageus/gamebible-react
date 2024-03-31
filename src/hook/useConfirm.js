const useConfirm = (msg = "", onConfirm, onCancel) => {
  if (!onConfirm) {
    return;
  }
  if (onCancel) {
    return;
  }

  const confirmEvent = () => {
    if (window.confirm(msg)) {
      onConfirm();
    } else {
      onCancel();
    }
  };
  return confirmEvent;
};

export default useConfirm;
