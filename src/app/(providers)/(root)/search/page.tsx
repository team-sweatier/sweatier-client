function SearchPage(props: {
  searchParams: {
    keyword: string;
  };
}) {
  return <div>{props.searchParams.keyword}</div>;
}

export default SearchPage;
