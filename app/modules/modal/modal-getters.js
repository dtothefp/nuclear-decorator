export function isOpen(currentId) {
  return [
    ['modalIsOpen', 'id'],
    (modalList) => {
      return modalList.indexOf(currentId) !== -1;
    }
  ];
}
