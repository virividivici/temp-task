import { useEffect, useState } from 'react';
import { Person } from './types';
import data from './people.json';

export const usePeople = () => {
  const [people, setPeople] = useState<Person[]>([]);

  useEffect(() => {
    setPeople(data as Person[])
  }, []);

  return people;
};
