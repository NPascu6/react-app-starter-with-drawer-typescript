import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {Avatar, Grid, Link} from "@mui/material";
import {_githubAvatarUrl} from "../_constant";
import {useSelector} from "react-redux";
import {RootState} from "../store/rootReducer";

export default function DashboardPage() {
    const {githubProfiles, githubProfile} = useSelector((state: RootState) => state.app);

    return (
        <Box sx={{display: 'flex'}}>
            <Box component="main" sx={{flexGrow: 1, p: 3}}>
                <Grid container>
                    <Grid item xs={9}> <Typography paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
                        enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
                        imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
                        Convallis convallis tellus id interdum velit laoreet id donec ultrices.
                        Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                        adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
                        nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
                        leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
                        feugiat vivamus at augue. At augue eget arcu dictum varius duis at
                        consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
                        sapien faucibus et molestie ac.
                    </Typography>
                        <Typography paragraph>
                            Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
                            eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
                            neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
                            tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
                            sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
                            tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
                            gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
                            et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
                            tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
                            eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
                            posuere sollicitudin aliquam ultrices sagittis orci a.
                        </Typography></Grid>
                    <Grid item xs={3}>
                        <Avatar alt={'Profile'} src={_githubAvatarUrl}/>
                        <Typography variant={"h4"}>{githubProfile?.name}</Typography>
                        <Typography variant={"h4"}>{githubProfile?.bio}</Typography>
                        <Typography variant={"h4"}>{githubProfile?.location}</Typography>

                        Profile url: <Link href={githubProfile?.url}>{githubProfile?.url}</Link>
                        Profile site: <Link href={githubProfile?.html_url}>{githubProfile?.html_url}</Link>
                        <Typography variant={"h4"}>Public repos: {githubProfile?.public_repos}</Typography>
                        <Typography variant={"h4"}>Private repos: {githubProfile?.total_private_repos}</Typography>
                        <Typography variant={"h4"}>Followers: {githubProfile?.followers}</Typography>
                        <Typography variant={"h4"}>Following: {githubProfile?.following}</Typography>

                        {githubProfiles.map(repo => <div>{repo.name}</div>)}
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}
