import {Divider, Grid, Paper, Typography} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import * as React from "react";
import YoutubeVideoLink from "../components/about/YoutubeVideoLink";
import CommentsForm from "../components/about/CommentsForm";
import RegisterForm from "../components/about/RegisterForm";
import LoginForm from "../components/about/LoginForm";
import useWindowSize from "../hooks/useWindowSize";

interface UserInfoFriend {
    name: string,
    email: string
}

export interface UserInfo {
    title: string,
    comments: string,
    email: string,
    completed: boolean,
    friends: UserInfoFriend[]
}

const AboutPage = () => {
    const theme = useTheme()
    const windowSize = useWindowSize()

    return <Grid container className={'Center'}>
            <Paper
                className={'Center'}
                sx={{
                    backgroundColor: theme.backgroundColor,
                    color: theme.textColor,
                    flexDirection: 'column',
                    flex: 1,
                    maxWidth: windowSize.innerWidth >= 500 ? '30em' : '20em',
                    padding: '1.5em',
                }}>
                <Typography variant={"h4"}>Norbert Pascu, 30'</Typography>
                <Divider/>
                <Typography variant={"body2"}>(norbipascu92@gmail.com)</Typography>
                <Typography variant={"h5"}>[ Senior Software Engineer / Developer ]</Typography>
                <Typography variant={"body2"}>(depends on who you ask)</Typography>
                <Divider/>
                <Typography variant={"h6"}>Working as a software developer / engineer for about 7 years, before
                    that,
                    I was a professional basketball player from the age of 6 until 22.
                </Typography>
                <Divider/>
                <Typography variant={"body2"}>
                    At 22 I decided to
                    change my career path and study computer science. Before even starting university, a friend of mine
                    in
                    my hometown helped me to get a job as tech support for a New York based
                    company. Did that for a year and a half then, I won an internship / competition, and got my first
                    job as
                    as Junior Web Developer at DVSE.ro(they manage online commerce portals
                    written in WPF and React(as well as some MVC stuff). Spent almost a year and a bit here, and then I
                    joined Bosch Automotive Solutions in Cluj-Napoca, as a Software Engineer,
                </Typography>
                <Typography variant={"body2"}>
                    working in the R&D department.(Here I did a bunch of Angular 6-7 apps, mostly for internal use).
                    After
                    Bosch, I worked for a Cognizant Softvision, mostly as a Back end developer with a bit of front end
                    development using Vue.
                </Typography>
                <Typography variant={"body2"}>
                    After Sofvision, I got the call to come to Switzerland, and join Amaris Consulting as a Full -
                    Consultant / Developer. Here I created some .NET Core
                    REST api's, mostly hosted and deployed across the azure platform(I am no dev-op's by any stretch of
                    the
                    word). TBC...
                </Typography>
                <Typography variant={"h6"}>Main competences: React, .Net Core(C#), Vue, Electron.</Typography>
                <Typography variant={"body2"}>Secondary Know how: Kubernetes overview with Rancher, setting up CI / CD
                    pipelines.
                    mentoring juniors, setting up interview questions, discussing project direction, involved in
                    discussing
                    system architecture(mostly learning).</Typography>
                <Divider/>
                <Typography variant={'h6'}>Example simple add form connected to Firebase API</Typography>
                <CommentsForm/>
                <Typography variant={'h6'}>Example register form connected to Firebase API</Typography>
                <RegisterForm/>
                <Typography variant={'h6'}>Example login form connected to Firebase API</Typography>
                <LoginForm/>
                <Typography variant={'h6'}>I also do this:</Typography>
                <YoutubeVideoLink/>
            </Paper>
        </Grid>
};

export default AboutPage;
