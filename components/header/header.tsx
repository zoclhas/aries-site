import {
    createStyles,
    Menu,
    Center,
    Header,
    Container,
    Group,
    Button,
    Burger,
    rem,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
// import { IconChevronDown } from "@tabler/icons-react";
import { AriesLogo } from "@/components/icons";

const HEADER_HEIGHT = rem(60);

const useStyles = createStyles((theme) => ({
    header: {
        position: "fixed",
        boxShadow: "0px 4px 16px 5px rgb(0, 0, 0, 0.15)",
    },

    inner: {
        height: HEADER_HEIGHT,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: rem(50),
        paddingRight: rem(50),

        [theme.fn.smallerThan("sm")]: {
            paddingLeft: rem(20),
            paddingRight: rem(20),
        },
    },

    links: {
        [theme.fn.smallerThan("sm")]: {
            display: "none",
        },
    },

    burger: {
        [theme.fn.largerThan("sm")]: {
            display: "none",
        },
    },

    link: {
        display: "block",
        lineHeight: 1,
        padding: `${rem(8)} ${rem(12)}`,
        borderRadius: theme.radius.md,
        textDecoration: "none",
        color:
            theme.colorScheme === "dark"
                ? theme.colors.dark[0]
                : theme.colors.gray[7],
        fontSize: theme.fontSizes.sm,
        fontWeight: 500,

        transition: "175ms ease-in-out",

        "&:hover": {
            backgroundColor:
                theme.colorScheme === "dark"
                    ? theme.colors.dark[6]
                    : theme.colors.gray[0],
        },
    },

    linkLabel: {
        marginRight: rem(5),
    },
}));

interface HeaderActionProps {
    links: {
        link: string;
        label: string;
    }[];
}

export function Navbar({ links }: HeaderActionProps) {
    const { classes } = useStyles();
    const [opened, { toggle }] = useDisclosure(false);
    const items = links.map((link) => {
        return (
            <Link key={link.label} href={link.link} className={classes.link}>
                {link.label}
            </Link>
        );
    });

    return (
        <Header
            height={HEADER_HEIGHT}
            sx={{ borderBottom: 0 }}
            className={classes.header}
        >
            <Container className={classes.inner} fluid>
                <Group>
                    <Link href="/">
                        <AriesLogo height={30} />
                    </Link>
                </Group>
                <Group spacing={5} className={classes.links}>
                    {items}
                </Group>
                <Button component="a" radius="md" variant="light" h={30}>
                    Add to server
                </Button>
            </Container>
        </Header>
    );
}
