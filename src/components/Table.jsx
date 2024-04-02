function Table({ data, config, keyFn }) {
    const renderedHeaders = config.map((column) => {
      return <th key={column.label}>{column.label}</th>;
    });
  
    const renderedRows = data.map((rowData) => {
      const renderedCells = config.map((column) => {
        //at first it would be label:name and we pass column.render(    { name: 'Orange', color: 'bg-orange-500', score: 5 }) at first
        //then label:color and again we pass column.render(    { name: 'Orange', color: 'bg-orange-500', score: 5 })
        // & so on.....
        return (

          <td className="p-2" key={column.label}>
            
            {column.render(rowData)} {/*takes in object {name, color, score} & object.name at first and so on.. */}
          </td>  //table cell
        );
      });
  
      return (
        <tr className="border-b" key={keyFn(rowData)}>
          {renderedCells}
        </tr>
      );
    });
  
    return (
      <table className="table-auto border-spacing-2">
        <thead>
          <tr className="border-b-2">{renderedHeaders}</tr>
        </thead>
        <tbody>{renderedRows}</tbody>
      </table>
    );
  }
  
  export default Table;
  