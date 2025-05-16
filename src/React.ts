import { ComponentProps } from 'react';

type FCProps<T> = T extends React.FC<infer P> ? P : never;

export type {
  FCProps,
  ComponentProps
}
