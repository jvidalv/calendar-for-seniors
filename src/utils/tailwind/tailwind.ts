import { create } from 'tailwind-rn';
import styles from 'app/utils/tailwind/tailwind.styles.json';
import customStyles from 'app/utils/tailwind/tailwind.styles.custom.json';

const { tailwind, getColor } = create({ ...styles, ...customStyles });

const tw = (classes: string, log: boolean = false) => {
  const stylesheet = tailwind(classes);
  if (__DEV__ && log) {
    console.info(
      JSON.stringify(stylesheet)
        .split(/[,{}]/)
        .join('\n')
    );
  }
  return stylesheet;
};

export { tw, getColor as twc };
