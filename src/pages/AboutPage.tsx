import {Divider, Paper, Typography} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import * as React from "react";

const AboutPage = () => {
    const theme = useTheme()

    return <Paper sx={{
        backgroundColor: theme.palette.secondary.main,
        color: theme.textColor,
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        maxWidth: '40em',
        padding: '1.5em',
        userSelect: 'none',
        height: '100%'
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
            change my career path and study computer science. Before even starting university, a friend of mine in
            my hometown helped me to get a job as tech support for a New York based
            company. Did that for a year and a half then, I won an internship / competition, and got my first job as
            as Junior Web Developer at DVSE.ro(they manage online commerce portals
            written in WPF and React(as well as some MVC stuff). Spent almost a year and a bit here, and then I
            joined Bosch Automotive Solutions in Cluj-Napoca, as a Software Engineer,
        </Typography>
        <Typography variant={"body2"}>
            working in the R&D department.(Here I did a bunch of Angular 6-7 apps, mostly for internal use). After
            Bosch, I worked for a Cognizant Softvision, mostly as a Back end developer with a bit of front end
            development using Vue.
        </Typography>
        <Typography variant={"body2"}>
            After Sofvision, I got the call to come to Switzerland, and join Amaris Consulting as a Full -
            Consultant / Developer. Here I created some .NET Core
            REST api's, mostly hosted and deployed across the azure platform(I am no dev-op's by any stretch of the
            word). TBC...
        </Typography>
        <Typography variant={"h6"}>Main competences: React, .Net Core(C#), Vue, Electron.</Typography>
        <Typography variant={"body2"}>Secondary Know how: Kubernetes overview with Rancher, setting up CI / CD
            pipelines.
            mentoring juniors, setting up interview questions, discussing project direction, involved in discussing
            system architecture(mostly learning).</Typography>
        <Divider/>
    </Paper>
};

export default AboutPage;
