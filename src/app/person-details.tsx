import { Button, Icon } from '@onfido/castor-react';
import React from 'react';
import { Code, Loading } from '../components';
import * as styles from './person-details.module.scss';
import { Person } from '../core/types';

interface Props {
  person: Person;
  onBack?: () => void;
}

export const PersonDetails = ({ person, onBack }: Props) => {

  if (!person) return <Loading />;

  return (
    <div className={styles.details}>
      <Button variant="tertiary" onClick={() => onBack?.()}>
        <Icon name="arrow-back" />
        Go back
      </Button>

      <Code>{JSON.stringify(person, null, 2)}</Code>
    </div>
  );
};
