const initForms = () => {

  const checkSelectors = () => {
    const elems = document.querySelectorAll('select');
    if(!elems) return;
    const instances = M.FormSelect.init(elems);
  }

  const checkDatePicker = () => {
    const elems = document.querySelectorAll('.datepicker');
    const instances = M.Datepicker.init(elems);
  }

  const checkRangePickers = () => {
    const elems = document.querySelectorAll("input[type=range]");
    const instances = M.Range.init(elems);
  }

  document.addEventListener('DOMContentLoaded', (event) => {
    checkSelectors();
    checkDatePicker();
    // checkRangePickers();
  })

}

export{initForms};
