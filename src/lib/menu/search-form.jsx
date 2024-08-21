import { useRef, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { Input } from '@/lib/ui/input';

function SearchForm() {
  const inputRef = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();

  function handleSearchSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const q = formData.get('q');

    if (q.trim()) {
      setSearchParams({ q });
    } else {
      setSearchParams({});
    }
  }

  useEffect(() => {
    if (!inputRef.current) return;

    const search = searchParams.get('q');

    if (!search && inputRef.current.value) {
      inputRef.current.value = '';
    }
  }, [searchParams]);

  return (
    <form onSubmit={handleSearchSubmit}>
      <Input
        ref={inputRef}
        name="q"
        type="search"
        placeholder="search"
        defaultValue={searchParams.get('q')}
      />
    </form>
  );
}

export { SearchForm };
