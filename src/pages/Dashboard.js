import { Content } from "../components/Dashboard";
import { Layout } from "../components/Layout"
// import { Search } from "../components/Search";

const DashBoard = () => {
    return (
        <Layout>
            <div>
                {/* <Search /> */}
                <Content />
            </div>
        </Layout>
    )
};


export default DashBoard