import React, { useState } from "react";
import { AppBar, Box, Drawer, IconButton, List, ListItem, makeStyles, Menu, MenuItem, Toolbar, useMediaQuery, useTheme } from "@material-ui/core";
import InvertColorsIcon from '@material-ui/icons/InvertColors';
import LanguageIcon from '@material-ui/icons/Language';
import NavLink from "../components/NavLink";
import { ContainerFactory } from "../logic/ContainerFactory";
import { AppStore } from "../stores/AppStore";
import { useStoreState } from "rfluxx-react";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor:
            theme.palette.type === "dark" ?
                theme.palette.background.paper :
                theme.palette.primary.main,
        color:
            theme.palette.type === "dark" ?
                theme.palette.text.primary :
                theme.palette.text.secondary
    },
    drawer: {
        marginRight: "auto"
    },
    drawerList: {
        paddingTop: "56px"
    },
    introLink: {
        marginLeft: "auto"
    },
    contactLink: {
        marginRight: "auto"
    }
}));

/**
 * Props passed to the @see NavBar.
 */
interface INavBarProps {
}

/**
 * Navigation bar.
 */
const NavBar: React.FunctionComponent<INavBarProps> = (props: INavBarProps) => {
    const classes = useStyles();
    const theme = useTheme();

    const [languageMenuAnchor, setLanguageMenuAnchor] = useState<Element | null>(null);
    const [drawerOpen, toggleDrawerOpen] = useState(false);
    const mqMatch = useMediaQuery(theme.breakpoints.up("md"));
    const appStore = ContainerFactory.getContainer().resolve<AppStore>("AppStore");
    const storeState = useStoreState(appStore);

    if (!storeState) {
        return null;
    }

    const { darkMode, text_content, localized_text_content } = storeState;

    const navLinks = <React.Fragment>
        <NavLink
            className={classes.introLink}
            href={"#intro"}
            text={localized_text_content.introLink as string} />
        <NavLink
            href={"#education"}
            text={localized_text_content.educationLink as string} />
        <NavLink
            href={"#workExperience"}
            text={localized_text_content.workExperienceLink as string} />
        <NavLink
            href={"#competences"}
            text={localized_text_content.competencesLink as string} />
        <NavLink
            className={classes.contactLink}
            href={"#contact"}
            text={localized_text_content.contactLink as string} />
    </React.Fragment>;

    const drawer = <React.Fragment>
        <IconButton
            className={classes.drawer}
            onClick={() => {
                toggleDrawerOpen(!drawerOpen);
            }}>
            <MenuIcon />
        </IconButton>
        <Drawer
            anchor={"left"}
            open={drawerOpen}
            onClose={() => toggleDrawerOpen(!drawerOpen)}>
            <List className={classes.drawerList}>
                <ListItem>
                    <NavLink
                        href={"#intro"}
                        text={localized_text_content.introLink as string}
                        onClick={() => toggleDrawerOpen(!drawerOpen)} />
                </ListItem>
                <ListItem>
                    <NavLink
                        href={"#education"}
                        text={localized_text_content.educationLink as string}
                        onClick={() => toggleDrawerOpen(!drawerOpen)} />
                </ListItem>
                <ListItem>
                    <NavLink
                        href={"#workExperience"}
                        text={localized_text_content.workExperienceLink as string}
                        onClick={() => toggleDrawerOpen(!drawerOpen)} />
                </ListItem>
                <ListItem>
                    <NavLink
                        href={"#competences"}
                        text={localized_text_content.competencesLink as string}
                        onClick={() => toggleDrawerOpen(!drawerOpen)} />
                </ListItem>
                <ListItem>
                    <NavLink
                        href={"#contact"}
                        text={localized_text_content.contactLink as string}
                        onClick={() => toggleDrawerOpen(!drawerOpen)} />
                </ListItem>
            </List>
        </Drawer>
    </React.Fragment>;

    return <AppBar className={classes.root}>
        <Toolbar>
            {mqMatch ? navLinks : drawer}
            <IconButton
                onClick={() => appStore.toggleDarkMode.trigger(!darkMode)}>
                <InvertColorsIcon />
            </IconButton>
            <Box>
                <IconButton onClick={(e) => {
                    languageMenuAnchor ?
                        setLanguageMenuAnchor(null) :
                        setLanguageMenuAnchor(e.currentTarget)
                }}>
                    <LanguageIcon />
                    <Menu
                        anchorEl={languageMenuAnchor}
                        open={languageMenuAnchor != null}
                        keepMounted
                    >
                        {
                            text_content.languages.map((language: string) => (
                                <MenuItem
                                    key={language}
                                    onClick={() => appStore.setLanguage.trigger(language)}>
                                    {language}
                                </MenuItem>
                            ))
                        }
                    </Menu>
                </IconButton>
            </Box>
        </Toolbar>
    </AppBar>;
}

export default NavBar;