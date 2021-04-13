import React from "react";
import { Link, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        margin: "0 10px"
    }
}));

/**
 * Props passed to the @see NavLink.
 */
interface INavLinkProps {
    /**
     * Class name.
     */
    className?: string;

    /**
     * Href.
     */
    href: string;

    /**
     * Link text.
     */
    text: string;

    /**
     * Executed when clicked.
     */
    onClick?: () => void;
}

/**
 * Navigation link.
 */
const NavLink: React.FunctionComponent<INavLinkProps> = (props: INavLinkProps) => {
    const classes = useStyles();

    const { href, text, className, onClick } = props;

    return <Link
        className={className ? `${classes.root} ${className}` : classes.root}
        variant={"button"}
        color={"inherit"}
        href={href}
        onClick={() => onClick && onClick()}>
        {text}
    </Link>;
}

export default NavLink;