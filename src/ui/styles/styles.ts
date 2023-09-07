import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export const colors = {
    backgroundColor: 'rgb(15, 23, 43)',
    onBackground: 'rgb(230, 230, 230)',
    secondary: 'rgb(150, 150, 150)'
}

export const styles = {
    body: {
        backgroundColor: colors.backgroundColor,
        color: colors.onBackground,
        fontFamily: "Roboto",
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100vw',
        height: '100vh'
    }
}