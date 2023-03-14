import { Fancybox } from "@fancyapps/ui";
const options = {
  dragToClose: false,
  autoFocus: false,
  trapFocus: false,
  template: {
    main: null,
  }
}

const init = () => {
  Fancybox.bind("[data-fancybox]", options)
}

export default { init };
