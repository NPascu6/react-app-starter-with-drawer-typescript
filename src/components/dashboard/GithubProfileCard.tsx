import {Avatar, Button, Divider, Grid, Link, Paper} from "@mui/material";
import {_githubAvatarUrl} from "../../_constant";
import Typography from "@mui/material/Typography";
import * as React from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../store/rootReducer";
import {useTheme} from "@mui/material/styles";
import {FacebookOutlined, Instagram} from "@mui/icons-material";
import DownloadIcon from '@mui/icons-material/Download';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const GithubProfileCard = () => {
    const {githubProfile} = useSelector((state: RootState) => state.app);
    const theme = useTheme();

    const onDownload = () => {
        const link = document.createElement("a");
        link.download = `PascuNorbertResumeEN.pdf`;
        link.href = "./PascuNorbertresumeEN.pdf";
        link.click();
    };

    return <Paper elevation={3} sx={{
        border: '1px solid',
        backgroundColor: theme.backgroundColor,
        display: 'flex',
        justifyContent: 'center',
        width: '20em',
        padding: '1em'
    }}>
        <Grid container sx={{
            display: 'flex', flexDirection: 'column',
            color: theme.textColor
        }}>
            <Grid container className={'Flex-Container-Center'}>
                <Avatar alt={'Profile'} src={_githubAvatarUrl}
                        sx={{width: theme.spacing(12), height: theme.spacing(12)}}/>
            </Grid>
            <Button sx={{
                borderRadius: 0,
                backgroundColor: theme.textColor,
                color: theme.backgroundColor,
                '&:hover': {backgroundColor: theme.backgroundColor, color: theme.textColor}
            }} onClick={onDownload}><Typography variant={"h6"}>Download CV </Typography>
                <DownloadIcon/>
            </Button>
            <Divider/>
            <Grid container className={'Flex-Container-Center'} sx={{flexDirection: 'column'}}>
                <Typography variant={"h5"}>{githubProfile?.name}</Typography>
                <Typography variant={"body2"}>[{githubProfile?.login}]</Typography>
                <Typography sx={{width: '100%'}} variant={"h6"}>{`${githubProfile?.bio}Zurich`}</Typography>
            </Grid>
            <Divider/>
            <Grid container className={'Flex-Container-Center'} sx={{flexDirection: 'column'}}>
                <Typography variant={"body2"}>
                    <Link sx={{color: theme.textColor, fontWeight: 'bold'}}
                          href={'mailto:norbipascu92@gmail.com'}>norbipascu92@gmail.com</Link>
                </Typography>
                <Typography variant={"body2"}>
                    <Link sx={{color: theme.textColor, fontWeight: 'bold'}}
                          href={'tel:+41765951562'}>+41765951562</Link>
                </Typography>
            </Grid>
            <Divider/>
            <Grid container sx={{height: '3em', alignItems: 'center', justifyContent: 'center'}}>
                <Link sx={{cursor: 'pointer', color: theme.textColor}}
                      href={"https://www.linkedin.com/in/norbert-pascu-5b1857116/"}
                      target={"_blank"}
                      rel={"noopener noreferrer"}><LinkedInIcon/>Linkedin</Link>
            </Grid>
            <Divider/>
            <Grid container sx={{height: '3em', alignItems: 'center', justifyContent: 'center'}}>
                <Link sx={{cursor: 'pointer', color: theme.textColor}} href={githubProfile?.html_url} target={"_blank"}
                      rel={"noopener noreferrer"}><GitHubIcon/>GitHub</Link>
            </Grid>
            <Divider/>
            <Grid container className={'Flex-Container-Center'}>
                <Grid item xs={12}>
                    <Typography variant={"body2"}>Public repos: {githubProfile?.public_repos}</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant={"body2"}>Followers: {githubProfile?.followers}</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant={"body2"}>Following: {githubProfile?.following}</Typography>
                </Grid>
                <Grid item xs={12} sx={{width: '15em', flexDirection: 'column'}} className={'Flex-Container-Center'}>
                    <Typography variant={"body2"} sx={{fontWeight: 'bold'}}>Highlighted
                        repos</Typography>
                    <Divider/>
                </Grid>

                <Grid item xs={12} sx={{width: '15em', flexDirection: 'column', borderTop: '1px solid'}}
                      className={'Flex-Container-Center'}>
                    <Typography variant={"body2"}> <Link sx={{color: theme.textColor, fontWeight: 'bold'}}
                                                         href={'https://github.com/NPascu6/react-app-starter-with-drawer-typescript'}>This
                        web app.</Link></Typography>

                    <Typography variant={"body2"}><Link sx={{color: theme.textColor, fontWeight: 'bold'}}
                                                        href={'https://github.com/NPascu6/ASP_.NET_Starter_API'}>.NET
                        Core 6 API</Link></Typography>
                </Grid>
                <Grid item xs={12}>
                </Grid>
            </Grid>
            <Divider/>
            <Divider/>
            <Grid container sx={{height: '3em', alignItems: 'center', justifyContent: 'center',}}>
                <Link href={"https://www.facebook.com/norbi.pascu"} target={"_blank"}
                      rel={"noopener noreferrer"}>
                    <FacebookOutlined sx={{color: theme.textColor}}/>
                </Link>
                <Link href={"https://www.instagram.com/norbipascu/?hl=en"} target={"_blank"}
                      rel={"noopener noreferrer"}>
                    <Instagram sx={{color: theme.textColor}}/>
                </Link>
            </Grid>
        </Grid>
    </Paper>
}

export default GithubProfileCard
