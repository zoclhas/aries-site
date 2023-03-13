import {
    createStyles,
    Image,
    Container,
    Title,
    Button,
    Group,
    Text,
    List,
    ThemeIcon,
    rem,
} from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";

import image from "./hero.png";

const useStyles = createStyles((theme) => ({
    outer: {
        minHeight: "100vh",
        display: "grid",
        alignItems: "center",
        overflow: "hidden",
        position: "relative",
    },

    inner: {
        display: "flex",
        justifyContent: "space-between",
        paddingTop: `calc(${theme.spacing.xl} * 4)`,
        paddingBottom: `calc(${theme.spacing.xl} * 4)`,
    },

    content: {
        maxWidth: rem(480),
        marginRight: `calc(${theme.spacing.xl} * 3)`,

        [theme.fn.smallerThan("md")]: {
            maxWidth: "100%",
            marginRight: 0,
        },
    },

    title: {
        color: theme.colorScheme === "dark" ? theme.white : theme.black,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontSize: rem(44),
        lineHeight: 1.2,
        fontWeight: 900,

        [theme.fn.smallerThan("xs")]: {
            fontSize: rem(28),
        },
    },

    control: {
        [theme.fn.smallerThan("xs")]: {
            flex: 1,
        },
    },

    image: {
        flex: 1,
        alignSelf: "center",
        boxShadow: "0px 4px 16px 5px rgb(0, 0, 0, 0.15)",

        [theme.fn.smallerThan("md")]: {
            zIndex: "-1",
            position: "absolute",
            opacity: "0.3",
            top: 0,
            left: "40%",
            boxShadow: "none",
        },
    },

    highlight: {
        position: "relative",
        backgroundColor: theme.fn.variant({
            variant: "light",
            color: theme.primaryColor,
        }).background,
        borderRadius: theme.radius.sm,
        padding: `${rem(4)} ${rem(12)}`,
    },
}));

export function Hero() {
    const { classes } = useStyles();
    return (
        <Container className={classes.outer}>
            <div className={classes.inner}>
                <div className={classes.content}>
                    <Title className={classes.title}>
                        A <span className={classes.highlight}>modern</span>{" "}
                        Discord <br /> bot
                    </Title>
                    <Text color="dimmed" mt="md">
                        Leave your moderation hassle to Aries. The all-in-one
                        discord bot that has moderation, games and a lot more!
                    </Text>

                    <List
                        mt={30}
                        spacing="sm"
                        size="sm"
                        icon={
                            <ThemeIcon size={20} radius="xl">
                                <IconCheck size={rem(12)} stroke={1.5} />
                            </ThemeIcon>
                        }
                    >
                        <List.Item>
                            <b>Simple</b> – Easy to setup and get it running
                        </List.Item>
                        <List.Item>
                            <b>Powerful</b> – Everything you wish* in a discord
                            bot
                        </List.Item>
                        <List.Item>
                            <b>Free</b> – All these for free! For premium plan
                            with more features, checkout the plans below
                        </List.Item>
                    </List>

                    <Group mt={30}>
                        <Button
                            component="a"
                            href="https://discord.com/oauth2/authorize?client_id=888843424923537440&permissions=5368709119918&scope=bot applications.commands"
                            target="_blank"
                            radius="lg"
                            size="md"
                            className={classes.control}
                        >
                            Invite Aries
                        </Button>
                        <Button
                            component="a"
                            href="https://discord.gg/qFzgpvaUe4"
                            target="_blank"
                            variant="default"
                            radius="lg"
                            size="md"
                            className={classes.control}
                        >
                            Support Server
                        </Button>
                    </Group>
                </div>
                <Image src={image.src} className={classes.image} radius="xl" />
            </div>
        </Container>
    );
}
