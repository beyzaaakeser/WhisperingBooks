const BookInfo = ({ title, value }) => {
  return (
    <tr>
      <td className=" border border-slate-300">{title}</td>
      <td className=" border border-slate-300">{value}</td>
    </tr>
  );
};
export default BookInfo