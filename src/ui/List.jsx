function List({ data, render, title }) {
  return (
    <>
      {title && <h1 className="flex gap-2 text-xl md:text-2xl">{title}</h1>}
      <div className="grid grid-cols-2 gap-x-4 gap-y-6 lg:grid-cols-4 xl:grid-cols-6">
        {data?.map(render)}
      </div>
    </>
  );
}

export default List;
