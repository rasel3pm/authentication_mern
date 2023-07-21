const UserTable = () => {
  return (
    <div>
      <table class="table table-striped table-hover table-sm table-responsive shadow-sm">
        <thead className="table-success">
          <tr className="">
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Contact</th>
            <th scope="col">Designation</th>
            <th scope="col">Salary</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">22</th>
            <td>Mark jukarbarg</td>
            <td>Otto@gmail.com</td>
            <td>01715972211</td>
            <td>Manager</td>
            <td>30000</td>
          </tr>
          <tr>
            <th scope="row">22</th>
            <td>Mark jukarbarg</td>
            <td>Otto@gmail.com</td>
            <td>01715972211</td>
            <td>Manager</td>
            <td>30000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
