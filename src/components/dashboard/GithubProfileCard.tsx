import {Avatar, Button, Divider, Grid, Link, Paper} from "@mui/material";
import {_githubAvatarUrl} from "../../_constant";
import Typography from "@mui/material/Typography";
import * as React from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../store/rootReducer";
import {useTheme} from "@mui/material/styles";
import LoaderPage from "../../pages/LoaderPage";
import {FacebookOutlined, Instagram} from "@mui/icons-material";

const GithubProfileCard = () => {
    const {githubProfiles, githubProfile} = useSelector((state: RootState) => state.app);
    const theme = useTheme();

    const onDownload = () => {
        const link = document.createElement("a");
        link.download = `PascuNorbertResumeEN.txt`;
        link.href = "./PascuNorbertresumeEN.pdf";
        link.click();
    };

    return <Paper elevation={3} sx={{
        border: '1px solid',
        backgroundColor: theme.palette.secondary.main,
        display: 'flex',
        justifyContent: 'center',
        width: '20em',
        padding: '1em'
    }}>
        <Grid container sx={{display: 'flex', flexDirection: 'column'}}>
            <Grid container className={'Flex-Container-Center'}>
                <Avatar alt={'Profile'} src={_githubAvatarUrl}
                        sx={{width: theme.spacing(12), height: theme.spacing(12)}}/>
            </Grid>
            <Button sx={{
                borderRadius: 0,
                backgroundColor: theme.palette.background.paper,
                color: theme.backgroundColor,
                '&:hover': {backgroundColor: theme.backgroundColor, color: theme.palette.background.paper}
            }} onClick={onDownload}>Download CV
            </Button>
            <Divider/>
            <Grid container className={'Flex-Container-Center'}>
                <Typography variant={"h4"}>{githubProfile?.name}</Typography>
                <Typography variant={"h6"}>[{githubProfile?.login}]</Typography>
                <Typography variant={"body2"}>{githubProfile?.bio}{githubProfile?.location}</Typography>
            </Grid>
            <Divider/>
            <Grid container sx={{height: '3em', alignItems: 'center', justifyContent: 'center'}}>
                <Link sx={{cursor: 'pointer'}} href={"https://www.linkedin.com/in/norbert-pascu-5b1857116/"}
                      target={"_blank"}
                      rel={"noopener noreferrer"}> https://www.linkedin.com/in/norbert-pascu-5b1857116/</Link>
            </Grid>
            <Divider/>
            <Grid container sx={{height: '3em', alignItems: 'center', justifyContent: 'center'}}>
                <Link sx={{cursor: 'pointer'}} href={githubProfile?.html_url} target={"_blank"}
                      rel={"noopener noreferrer"}>{githubProfile?.html_url}</Link>
            </Grid>
            <Divider/>
            <Grid container className={'Flex-Container-Center'}>
                <Grid item xs={12}>
                    <Typography variant={"body2"}>Public repos: {githubProfile?.public_repos}</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant={"body2"}>Private repos: {githubProfile?.total_private_repos}</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant={"body2"}>Followers: {githubProfile?.followers}</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant={"body2"}>Following: {githubProfile?.following}</Typography>
                </Grid>
            </Grid>
            <Divider/>
            <Grid container className={'Flex-Container-Center'}>
                <Grid item xs={12}>
                    <Typography variant={"h6"}>Some Github repo links:</Typography>
                </Grid>
                <Divider/>
                {githubProfiles ? githubProfiles.map(repo => <div key={repo?.id}> | <Link
                    href={repo?.html_url} target={"_blank"}
                    rel={"noopener noreferrer"}>{repo?.name}</Link> | </div>) : <LoaderPage/>}
            </Grid>
            <Divider/>
            <Grid container sx={{height: '3em', alignItems: 'center', justifyContent: 'center'}}>
                <Link href={"https://www.facebook.com/norbi.pascu"} target={"_blank"}
                      rel={"noopener noreferrer"}>
                    <FacebookOutlined/>
                </Link>
                <Link href={"https://www.instagram.com/norbipascu/?hl=en"} target={"_blank"}
                      rel={"noopener noreferrer"}>
                    <Instagram/>
                </Link>
            </Grid>
        </Grid>
    </Paper>
}

export default GithubProfileCard
