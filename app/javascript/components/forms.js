const initForms = () => {

  const checkSelectors = () => {
    const elems = document.querySelectorAll('select');
    if(!elems) return;
    const instances = M.FormSelect.init(elems);
  }

  const checkDatePicker = () => {
    const elems = document.querySelectorAll('.datepicker');
    const thisYear = new Date().getFullYear();
    const options = {'yearRange': [thisYear - 50,thisYear]}
    const instances = M.Datepicker.init(elems, options);
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
