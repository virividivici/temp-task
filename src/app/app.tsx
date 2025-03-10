import { Icons } from '@onfido/castor-icons';
import React, { useState } from 'react';
import { List } from '../components';
import { Person as PersonType } from '../core/types';
import { usePeople } from '../core/usePeople';
import * as styles from './app.module.scss';
import { Person } from './person';
import { PersonDetails } from './person-details';

export function App() {
  const people = usePeople();
  const [selected, setSelected] = useState<PersonType>();

  return (
    <main className={styles.main}>
      <Icons />
      {selected ? (
        <PersonDetails person={selected} onBack={() => setSelected(undefined)} />
      ) : (
        <List className={styles.list}>
          {people.map((p) => (
            <li key={p.name}>
              <Person person={p} onSelect={() => setSelected(p)} />
            </li>
          ))}
        </List>
      )}
    </main>
  );
}
