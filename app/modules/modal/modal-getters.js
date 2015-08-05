export const modalsOpenStatuses = ['modalIsOpen'];

export const openModalIds = [
  modalsOpenStatuses,
  (modals) => {
    return modals.filter(status => status).keySeq().toJS();
  }
];
