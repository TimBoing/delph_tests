const initForms = () => {

  const checkSelectors = () => {
    const elems = document.querySelectorAll('select');
    if(!elems) return;

    document.addEventListener('DOMContentLoaded', function() {
      const instances = M.FormSelect.init(elems);
    });
  }

  const checkDatePicker = () => {
    document.addEventListener('DOMContentLoaded', function() {
      const elems = document.querySelectorAll('.datepicker');
      const instances = M.Datepicker.init(elems);
    });
  }

  checkSelectors();
  checkDatePicker();
}

export{initForms};
