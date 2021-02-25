import { create } from 'tailwind-rn';
import styles from 'app/utils/tailwind/tailwind.styles.json';
import customStyles from 'app/utils/tailwind/tailwind.styles.custom.json';

const { tailwind, getColor } = create({ ...styles, ...customStyles });

const tw = (classes: string, log: boolean = false) => {
  const ss = tailwind(classes);
  if (__DEV__ && log) {
    console.info(
      JSON.stringify(ss)
        .split(/[,{}]/)
        .join('\n')
    );
  }
  return ss;
};

export { tw, getColor as twc };
