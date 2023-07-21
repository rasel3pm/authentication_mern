import { BsPlusCircle } from 'react-icons/bs';
const DashBtn = () => {
  return (
    <div>
      <div className="row">
            <div className="col-md-4">
            <form className="d-flex">
                <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                Search
                </button>
            </form>
            </div>

            <div className="col-md-8 text-end">
                <button className="btn btn-success px-3" type="submit">
               < BsPlusCircle size={23}/> Add New
                </button>
            </div>
      </div>

    </div>
  );
};

export default DashBtn;
