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

export default function TermsOfService() {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Typography className={classes.heading} variant="h2">
        TERMS OF SERVICE
      </Typography>

      <Typography className={classes.desc}>
        Please read these terms and conditions of Tharavu.org organization
        carefully before using our service.
      </Typography>

      <Typography className={classes.questHeading} variant="h4">
        Terms and Definitions
      </Typography>
      <Typography className={classes.subtitle} variant="subtitle1">
        The following are the some important terms used in this page.
        <ul>
          <li>
            <strong>Organization</strong>
            &nbsp;It refers to Tharavu.org organization.
          </li>
          <li>
            <strong>Website</strong>
            &nbsp; It refers to Tharavu.org website (https://tharavu.org).
          </li>
          <li>
            <strong>We/Our</strong>
            &nbsp;It refers to this organization, service or website.
          </li>
          <li>
            <strong>You</strong>
            &nbsp;It refers to anybody(Individual, Company or Service) who
            access, use or consume this service.
          </li>
          <li>
            <strong>Service</strong>
            &nbsp;It refers to this website and any actions within it.
          </li>
        </ul>
      </Typography>

      <Typography className={classes.questHeading} variant="h4">
        About Us
      </Typography>
      <Typography className={classes.subtitle} variant="subtitle1">
        The Tharavu.org is a non-profit organization. It is based on Chennai,
        Tamilnadu, India. We provide services worldwide.
      </Typography>

      <Typography className={classes.questHeading} variant="h4">
        Our Services
      </Typography>
      <Typography className={classes.subtitle} variant="subtitle1">
        We provide various services which includes:
        <ul>
          <li>Tag based events listing.</li>
          <li>Exploring these events.</li>
          <li>Making visual representation of these events.</li>
        </ul>
      </Typography>

      <Typography className={classes.questHeading} variant="h4">
        Using Our Services
      </Typography>
      <Typography className={classes.subtitle} variant="subtitle1">
        Using our services means that you are subject to these terms and
        conditions.
        <ul>
          <li>
            Anybody(Individual, Company or Service) can access, use or consume
            this service.
          </li>
          <li>Minimum age required to access this service is 14+.</li>
          <li>
            Minimum age required to create Tharavu.org organization account is
            18+.
          </li>
          <li>
            Children below required age can be allowed to access the service
            with guidance of their parent or legal guardian.
          </li>
          <li>
            A parent or guardian are responsible for their child&lsquo;s
            activity on the services and they must agree to these terms and
            conditions.
          </li>
          <li>
            Based on the user roles and permissions, you can create, modify and
            remove contents here. Most of your contents will be publicly
            available.
          </li>
          <li>
            You have no obligation to use or provide any content to our
            services.
          </li>
          <li>You must respect other users and their contents.</li>
          <li>
            It is also your responsiblity to secure your Tharavu.org account and
            services.
          </li>
          <li>
            You can provide us feedback or suggestions to improve our services
            and we will try to work on this without any obligation to you.
          </li>
          <li>
            You must agree with the&nbsp;
            <a href="/legal/privacy-policy">Privacy Policy</a>
          </li>
          <li>You must comply with any applicable laws.</li>
        </ul>
      </Typography>

      <Typography className={classes.questHeading} variant="h4">
        Our Rights
      </Typography>
      <Typography className={classes.subtitle} variant="subtitle1">
        We want to hold some rights to run our services, such as:
        <ul>
          <li>
            We use, modify, remove, delete, host, reproduce, communicate, save,
            publish, public display, translate your content you created in this
            service.
          </li>
          <li>
            We may suspend or terminate your account or access to this service
            if you voilate any of these terms and conditions.
          </li>
          <li>
            We may send you communications like service updates, important
            security related and other information.
          </li>
        </ul>
      </Typography>

      <Typography className={classes.questHeading} variant="h4">
        Disagreements
      </Typography>
      <Typography className={classes.subtitle} variant="subtitle1">
        You can informally contact us for any concerns or disputes before taking
        any legal actions.
      </Typography>

      <Typography className={classes.questHeading} variant="h4">
        Warranty
      </Typography>
      <Typography className={classes.subtitle} variant="subtitle1">
        We provide our services with atmost care and concern. You can contact us
        for any issues to be resolved and unless required by law, we do not
        provide any implied warranties.
      </Typography>

      <Typography className={classes.questHeading} variant="h4">
        Disclaimers
      </Typography>
      <Typography className={classes.subtitle} variant="subtitle1">
        <ul>
          <li>
            We do not claim that the information provided in this service is
            accurate, 100%, or reliable source of real events.
          </li>
          <li>
            People creating content with their own knowledge and it may contain
            fault and defects information.
          </li>
          <li>
            We work towards development of our services with reliability and
            efficiency, But we do not make any other commitments about our
            services.
          </li>
        </ul>
      </Typography>

      <Typography className={classes.questHeading} variant="h4">
        Limitation of Liability
      </Typography>
      <Typography className={classes.subtitle} variant="subtitle1">
        These terms and conditions of Tharavu.org organization do not liable for
        any losses, death, personal injury, fraud, misinterpretation,
        negligence, willful misconduct.
        <br />
        To the maximum extent permitted by applicable law, in no event shall the
        organization be liable for any special, incidental, indirect, or
        consequential damages whatsoever (including, but not limited to, damages
        for loss of profits, loss of data or other information, for business
        interruption, loss of privacy arising out of or in any way related to
        the use of or inability to use the Service, third-party software and/or
        third-party hardware used with the Service, or otherwise in connection
        with any provision of this Terms).
      </Typography>

      <Typography className={classes.questHeading} variant="h4">
        Changes
      </Typography>
      <Typography className={classes.subtitle} variant="subtitle1">
        We reserve the right to modify or replace these Terms and Conditions at
        any time. If a revision is made, we will provide you at least 7 days
        notice prior to any new terms and conditions taking effect.
        <br />
        We will get appropriate consent from you before proceeding with the new
        terms and conditions.
      </Typography>

      <Typography className={classes.questHeading} variant="h4">
        Contact Us
      </Typography>
      <Typography className={classes.subtitle} variant="subtitle1">
        If you have any questions about these Terms and Conditions, You
        can&nbsp;
        <a href="/contact-us">contact us</a>
      </Typography>
    </Paper>
  );
}
