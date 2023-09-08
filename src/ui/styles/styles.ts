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

    "@media(min-width: 1024px)": {
        indexHeader: {
            flex: 1,
            position: 'sticky',
            top: 100,
            left: 0,
            height: '100vh',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
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
            alignItems: 'center'
        }
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

        indexContent: {

        }
    },

    "@media(min-width: 1400px)": {
        indexHeaderName: {
            "& h1":{
                fontSize: '4rem'
            },

            "& h3": {
                fontSize: '2rem'
            }
        }
    },

    "@media(max-width: 1400px)": {
        indexHeaderName: {
            "& h1":{
                fontSize: '3rem'
            },

            "& h3": {
                fontSize: '3rem'
            }
        }
    },

    indexHeader: {},

    indexContent: {},

    colorSecondary: {
        color: colors.secondary
    },

    indexHeaderName: {
        flex: .75
    },

    indexHeaderLinks: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        flex: 0.25
    }
}