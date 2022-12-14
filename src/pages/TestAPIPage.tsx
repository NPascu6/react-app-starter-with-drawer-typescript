import {useSelector} from "react-redux";
import {RootState} from "../store/rootReducer";
import {Grid} from "@mui/material";
import TestAPIUsers from "../components/test-api/TestAPIUsers";
import TestAPIUserDetails from "../components/test-api/TestAPIUserDetails";
import TestAPIUserRoles from "../components/test-api/TestAPIUserRoles";
import TestAPIAssets from "../components/test-api/TestAPIAssets";
import TestAPIWallets from "../components/test-api/TestAPIWallets";

const TestAPIPage = () => {
    const {
        allTestAssets,
        allTestUserDetails,
        allTestUserRoles,
        allTestUsers,
        allTestWallets
    } = useSelector((state: RootState) => state.testAPI);

    return <>
        <Grid sx={{display: 'flex'}} className={'Center'} container>
            <TestAPIUsers items={allTestUsers}/>
            <TestAPIUserDetails items={allTestUserDetails}/>
            <TestAPIUserRoles items={allTestUserRoles}/>
            <TestAPIAssets items={allTestAssets}/>
            <TestAPIWallets items={allTestWallets}/>
        </Grid>
    </>
}

export default TestAPIPage;
