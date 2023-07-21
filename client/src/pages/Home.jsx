import DashBtn from "../components/DashBtn";
import Filter from "../components/Filter";
import UserTable from "../components/UserTable";

const Home = () => {
  return (
    <div className="container mt-5">
      <DashBtn />
      <Filter />
      <UserTable />
    </div>
  );
};

export default Home;
