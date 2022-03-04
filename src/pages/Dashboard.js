import { Text } from "@chakra-ui/react";
import { Layout } from "../components/Layout"
import { Search } from "../components/Search";

const DashBoard = () => {
    return (
        <Layout>
            <div>
                <Text>Dashboard content</Text>
                <Search />
            </div>
        </Layout>
    )
};


export default DashBoard