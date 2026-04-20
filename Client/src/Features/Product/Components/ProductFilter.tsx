interface Props {
  sort: string;
  setSort: (value: any) => void;
}

const ProducFilter = ({sort,setSort }: Props) => {
  return (
    <div className="flex gap-4">


      {/* SORT */}
      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className="px-3 py-2 border rounded"
      >
        <option value="">Mặc định</option>
        <option value="price_desc">Giá cao → thấp</option>
        <option value="price_asc">Giá thấp → cao</option>
        <option value="newest">Mới nhất</option>
      </select>

    </div>
  );
};

export default ProducFilter;