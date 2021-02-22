import { create } from 'tailwind-rn';
import styles from 'app/utils/tailwind/tailwind.styles.json';

const { tailwind, getColor } = create(styles);

export { tailwind as tw, getColor as twc };
