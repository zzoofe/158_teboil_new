import { Fancybox } from "@fancyapps/ui";
const options = {
  dragToClose: false,
  autoFocus: false,
  trapFocus: false,
  template: {
    closeButton: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
      '<path d="M20.3804 1.38043C20.9987 0.762104 22.0012 0.762104 22.6195 1.38043C23.2379 1.99876 23.2379 3.00128 22.6195 3.61961L14.2391 12L22.6195 20.3804C23.2379 20.9988 23.2379 22.0013 22.6195 22.6196C22.0012 23.2379 20.9987 23.2379 20.3804 22.6196L12 14.2392L3.61955 22.6196C3.00122 23.2379 1.9987 23.2379 1.38037 22.6196C0.762043 22.0013 0.762043 20.9988 1.38037 20.3804L9.76079 12L1.38037 3.61961C0.762044 3.00128 0.762044 1.99876 1.38037 1.38043C1.9987 0.762104 3.00122 0.762104 3.61955 1.38043L12 9.76085L20.3804 1.38043Z" fill="#004798"/>\n' +
      '</svg>\n',
    main: null,
  }
}

const init = () => {
  Fancybox.bind("[data-fancybox]", options)
}

export default { init };
