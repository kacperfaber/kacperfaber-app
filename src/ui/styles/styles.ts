import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export const colors = {
    backgroundColor: 'rgb(15, 23, 43)',
    onBackground: 'rgb(230, 230, 230)',
    secondary: 'rgba(250,250,250,0.5)'
}

export const styles = {
    body: {
        backgroundColor: colors.backgroundColor,
        color: colors.onBackground,
        fontFamily: "Roboto"
    },

    indexContainer: {},

    index: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center'
    },

    appFooter: {
        width: '100%',
        height: '100px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },

    textButton: {
        textDecoration: 'none',
        color: colors.secondary,

        "&:hover": {
            color: 'white'
        }
    },

    "@media(min-width: 1024px)": {
        indexHeader: {
            flex: 1,
            position: 'sticky',
            top: 100,
            left: 0,
            height: '75vh',
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'column',
        },

        indexContainer: {
            paddingLeft: '10rem',
            paddingRight: '10rem'
        },

        index: {
            flexDirection: 'row'
        },

        indexContent: {
            flex: 1,

            height: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'column',
            alignItems: 'left'
        },

        indexHeaderChapters: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'left'
        },
    },

    "@media(max-width: 1024px)": {
        indexHeader: {},

        indexContainer: {
            paddingLeft: '2rem',
            paddingRight: '2rem'
        },

        index: {
            flexDirection: 'column'
        },

        indexContent: {},

        indexHeaderChapters: {
            display: 'none'
        }
    },

    "@media(min-width: 1400px)": {
        indexHeaderName: {
            "& h1": {
                fontSize: '4rem',
                margin: 0
            },

            "& h3": {
                fontSize: '2rem',
                margin: 0
            }
        },

        baseListItemAction: {
            flex: 0.2
        },

        baseListItem: {
            justifyContent: 'left'
        }
    },

    "@media(max-width: 1400px)": {
        indexHeaderName: {
            "& h1": {
                fontSize: '3rem',
                margin: 0,
                marginTop: '25px'
            },

            "& h3": {
                fontSize: '2rem',
                margin: 0
            }
        },

        baseListItemAction: {
            display: 'none'
        },

        baseListItem: {
            justifyContent: 'center'
        }
    },

    indexHeader: {},

    indexContent: {},

    colorSecondary: {
        color: colors.secondary
    },

    textSecondary: {
        color: colors.secondary,
        fontSize: '1.2rem'
    },

    indexHeaderName: {
        // flex: 0.4
    },



    chapterItem: {
        color: colors.secondary,
        transition: "color 0.1s ease-in-out",

        border: 'none',
        backgroundColor: 'transparent',
        paddingBottom: '15px',

        "&:hover": {
            color: colors.onBackground
        },

        "& h4": {
            margin: '0 0 0 0'
        }
    },

    chapterItemActive: {
        color: colors.onBackground
    },

    indexHeaderLinks: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        flex: 0.25,

        "& a": {
            color: colors.secondary,
            textDecoration: 'none',
            fontSize: '2.5rem',
            margin: '10px',
            transition: 'color 0.1s ease-in-out',
            height: '100%',

            "&:hover": {
                color: 'white'
            }
        }
    },

    baseIndexSection: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        paddingTop: '50px'
    },

    baseListContainer: {
        width: '100%',

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },

    baseListItem: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        padding: '20px',
        borderRadius: '30px',
        backgroundColor: 'rgba(255, 255, 255, 0)',
        transition: 'background-color 0.1s ease-in-out',

        "&:hover": {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            cursor: 'pointer'
        }
    },

    baseListItemAction: {
    },

    baseListItemContent: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'left',
        flexDirection: 'column',
        flex: 0.8,

        "& h2": {
            margin: 0,
            lineHeight: 0
        }
    },

    button: {
        color: 'rgb(94 234 212)',
        backgroundColor: 'rgba(45,212,191,.1)',
        padding: '10px',
        borderRadius: '50px',
        border: 'none',
        transition: 'background-color 0.1s ease-in-out',

        "&:hover": {
            backgroundColor: 'rgba(45,212,191,0.24)'
        }
    },

    baseListItemTags: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap'
    },

    tag: {
        padding: '10px',
        borderRadius: '100px',
        color: 'rgb(94 234 212)',
        backgroundColor: 'rgba(45,212,191,.1)',
        margin: [5, 5]
    },

    indexHeaderChapters: {}
}
