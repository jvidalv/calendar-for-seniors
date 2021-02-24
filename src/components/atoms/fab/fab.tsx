import React, { FC } from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

import styles from './fab.styles';

export const Fab: FC<TouchableOpacityProps> = ({ children, ...props }) => {
  return (
    <TouchableOpacity {...props} style={[styles.fab, props?.style]}>
      {children}
    </TouchableOpacity>
  );
};
