import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  paper: {
    margin: theme.spacing(3),
    padding: theme.spacing(3),
    overflowY: 'auto',
    height: `calc(100% - ${theme.spacing(12)}px)`,
    minHeight: `calc(100% - ${theme.spacing(12)}px)`,
  },
  heading: {
    textAlign: 'center',
  },
  questHeading: {
    marginTop: theme.spacing(2),
  },
  desc: {
    textAlign: 'center',
    marginTop: theme.spacing(2),
  },
  subtitle: {
    marginTop: theme.spacing(2),
  },
}));

export default function PrivacyPolicy() {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Typography className={classes.heading} variant="h2">
        PRIVACY POLICY
      </Typography>
      <Typography className={classes.desc} variant="body1">
        It is our responsiblity to protect your information and privacy.
        <br />
        This Tharavu.org organization privacy policy describe how we process
        your data.
      </Typography>
      <Typography className={classes.questHeading} variant="h4">
        What information we collect
      </Typography>
      <Typography className={classes.subtitle} variant="subtitle1">
        We collect information to provide better services to all our users.
        <ul>
          <li>
            We collect technical information about the apps, browsers and
            devices that you use to access our services, including, IP address,
            browser type and version, time zone setting, operating system,
            platform and device type.
          </li>
          <li>
            We also collect some personal information when you sign up to the
            tharavu.org account that includes your name, email address, phone
            number and a password.
          </li>
        </ul>
      </Typography>
      <Typography className={classes.questHeading} variant="h4">
        How we collect information
      </Typography>
      <Typography className={classes.subtitle} variant="subtitle1">
        When you access the tharavu.org website through any apps, browsers and
        devices, we collect various information.
        <ul>
          <li>
            We collect technical information from the respective built in
            interfaces.
          </li>
          <li>
            We collect personal information when you sign up for the tharavu.org
            account with your consent.
          </li>
        </ul>
      </Typography>
      <Typography className={classes.questHeading} variant="h4">
        Why we collect information
      </Typography>
      <Typography className={classes.subtitle} variant="subtitle1">
        We use your information to deliver, maintain and improve our services.
        <ul>
          <li>We use IP address to log user interactions to our services.</li>
          <li>
            We use your location information for analytics purposes and to
            provide customized location based services.
          </li>
          <li>
            We use device information such as browser type and version, time
            zone setting, operating system and platform, device type to improve
            user experience and analytics purposes.
          </li>
          <li>
            We also use your personal information such as &quot;Name&quot; for
            account display, &quot;email address&quot; for sign in and
            communications, &quot;password&quot; for sign in and &quot;phone
            number&quot; for communications and OTP purposes.
          </li>
        </ul>
      </Typography>
      <Typography className={classes.questHeading} variant="h4">
        How you controls the information we collected from you
      </Typography>
      <Typography className={classes.subtitle} variant="subtitle1">
        We provide you with the ability to control your information.
        <ul>
          <li>
            When you are signed in, you can always review and update your
            presonal information such as name, email address, password and phone
            number.
          </li>
          <li>
            You may change or correct your personal information in your account
            settings.
          </li>
          <li>
            You can always review and controls your activity in the tharavu.org
            dashboard.
          </li>
          <li>You can export a copy of content in your tharavu.org account.</li>
          <li>
            You can remove your specific content you created in the process of
            service activities.
          </li>
          <li>You can also delete your entire account from the tharavu.org.</li>
        </ul>
      </Typography>
      <Typography className={classes.questHeading} variant="h4">
        How your information shared
      </Typography>
      <Typography className={classes.subtitle} variant="subtitle1">
        Our services let you share information with other people.
        <ul>
          <li>
            Sharing includes your content and name to other users, members and
            public users the Tharavu.org service.
          </li>
          <li>
            We do not share your personal information with other companies,
            organisations or individuals outside of tharavu.org except for legal
            reasons.
          </li>
          <li>
            The legal resons including any law, regulation, enforceable
            governmental request.
          </li>
        </ul>
      </Typography>
      <Typography className={classes.questHeading} variant="h4">
        How your information protected
      </Typography>
      <Typography className={classes.subtitle} variant="subtitle1">
        We build our services with strong security features that continuously
        protect your information.
        <ul>
          <li>We use encryption to keep your data safe.</li>
          <li>We protect your account from unauthorized access.</li>
          <li>
            Only authorized tharavu.org organization members have access to your
            personal information such as Name, Email address and Phone number.
          </li>
        </ul>
      </Typography>
      <Typography className={classes.questHeading} variant="h4">
        Cookies and other related technologies
      </Typography>
      <Typography className={classes.subtitle} variant="subtitle1">
        A cookie is a small piece of text sent to your browser by a website that
        you visit. It helps the website to remember information about you.
        <ul>
          <li>We are not using this cookie to store information about you.</li>
          <li>
            We use similar or related technology in browser, apps and devices
            such as localStorage and SessionStorage to store user preferences
            and signed in user unique identifiers.
          </li>
        </ul>
      </Typography>
      <Typography className={classes.questHeading} variant="h4">
        Where your information processed and stored
      </Typography>
      <Typography className={classes.subtitle} variant="subtitle1">
        The Tharavu.org service available in all over the world, regardless of
        where your information is processed and stored, we apply the same
        protections described in this policy.
        <ul>
          <li>
            The website frontend is being developed at&nbsp;
            <a href="https://github.com">https://github.com</a>
            &nbsp;that provides hosting for open source software development
            version control.
          </li>
          <li>
            You can access the source at&nbsp;
            <a href="https://github.com/tharavu-org">
              https://github.com/tharavu-org
            </a>
          </li>
          <li>We do not own our web servers.</li>
          <li>
            We store and process your information in third party web servers,
            commonly known as service providers or web hosting providers.
          </li>
          <li>
            We use third party service called&nbsp;
            <a href="http://ip-api.com">ip-api.com</a>
            &nbsp;to send your ip address and get your location information.
          </li>
          <li>
            Your information may be processed on servers located outside of the
            country where you live.
          </li>
          <li>
            Data protection laws vary among countries where your information
            stored.
          </li>
          <li>
            By accessing the tharavu.org services, you acknowledge that your
            personal data may be collected and transferred from your local
            jurisdiction to other countries
          </li>
        </ul>
        We will continue to ensure that your personal information is
        appropriately safeguarded.
      </Typography>
      <Typography className={classes.questHeading} variant="h4">
        Compliance & Cooperation with regulators
      </Typography>
      <Typography className={classes.subtitle} variant="subtitle1">
        We regularly review this tharavu.org Privacy Policy and make sure that
        we process your information in ways that comply with it.
      </Typography>
    </Paper>
  );
}
