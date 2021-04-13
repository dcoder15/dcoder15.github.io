import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import { ContainerFactory } from "../logic/ContainerFactory";
import { AppStore } from "../stores/AppStore";
import { useStoreState } from "rfluxx-react";
import ContactForm from "../components/ContactForm";

const useStyles = makeStyles((theme) => ({
    root: {
    },
    divider: {
        margin: "20px 0",
        width: "100%"
    }
}));

/**
 * Props passed to the @see Contact.
 */
interface IContactProps {
}

/**
 * Contact.
 */
const Contact: React.FunctionComponent<IContactProps> = (props: IContactProps) => {
    const classes = useStyles();

    const appStore = ContainerFactory.getContainer().resolve<AppStore>("AppStore");
    const storeState = useStoreState(appStore);

    if (!storeState) {
        return null;
    }

    const { localized_text_content } = storeState;

    return <React.Fragment>
        <Box
            className={classes.root}
            id={"contact"}>
            <ContactForm
                contactHeading={localized_text_content.contactHeading as string}
                contactDirection={localized_text_content.contactDirection as string}
                subjectLabel={localized_text_content.subjectLabel as string}
                sendButtonLabel={localized_text_content.sendButtonLabel as string} />
        </Box>
    </React.Fragment>;
}

export default Contact;