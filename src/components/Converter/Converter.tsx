import React, { FC } from 'react';
import styles from './Converter.module.scss';

interface ConverterProps {}

const Converter: FC<ConverterProps> = () => (
  <div className={styles.Converter}>
    Converter Component
  </div>
);

export default Converter;
