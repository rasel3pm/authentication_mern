
const Filter = () => {
  return (
    <div>
      <div className="row py-4">
        <div className="col-6 col-md-3">
          <select
            className="form-select form-select-sm"
            aria-label=".form-select-sm example"
          >
            <option selected="Gender"> Gender</option>
            <option value={1}>Male</option>
            <option value={2}>Female</option>
          </select>
        </div>
        <div className="col-6 col-md-3">
            <select
                className="form-select form-select-sm"
                aria-label=".form-select-sm example"
            >
                <option selected="Designation">Designation</option>
                <option value={1}>Manager</option>
                <option value={2}>Officer</option>
            </select>
        </div>
        <div className="col-6 col-md-3">
            <select
                className="form-select form-select-sm"
                aria-label=".form-select-sm example"
            >
                <option selected="Designation">Designation</option>
                <option value={1}>Manager</option>
                <option value={2}>Officer</option>
            </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;
