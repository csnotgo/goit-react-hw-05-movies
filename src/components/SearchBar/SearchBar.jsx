import { useState } from 'react';
import { Form, Button, Input } from './SearchBar.styled';
import { useSearchParams } from 'react-router-dom';

export const SearchBar = () => {
  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState('');

  const onSubmit = e => {
    e.preventDefault();

    if (!search) {
      alert('please, enter movie name!');
    }
    setSearchParams(search !== '' ? { query: search } : {});
    setSearch('');
  };

  const onChange = e => {
    setSearch(e.target.value);
  };

  return (
    <Form onSubmit={onSubmit}>
      <Input type="text" onChange={onChange} value={search} />
      <Button type="submit">🔎</Button>
    </Form>
  );
};
