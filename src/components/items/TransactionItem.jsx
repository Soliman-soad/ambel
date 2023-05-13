const TransactionItem = ({item}) => {
  return (
    <tr className="border-b border-[#42424233] border-opacity-20 last:border-b-0">
      <td className="pt-3 pb-[17px]">
        <p>{item?.userName}</p>
      </td>
      <td className="pt-3 pb-[17px]">
        <p>{item?.name}</p>
      </td>
      <td className="pt-3 pb-[17px]">
        <p>${item?.subscription}</p>
      </td>
      <td className="pt-3 pb-[17px]">
        <p>${item?.transaction}</p>
      </td>
      <td className="pt-3 pb-[17px]">
        <p>{item?.percentage}%</p>
      </td>
    </tr>
  );
};

export default TransactionItem;
