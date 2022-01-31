import { makeStyles } from "@material-ui/core"

export const useStyles = makeStyles(() => ({
    modalContainer: {
        width: 300,
        height: 400,
        marginTop: 100,
        borderRadius: 5,
        background: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    modalTitle: {
        paddingTop: 60,
        paddingBottom: 30,
        fontFamily: 'Roboto'
    },
    form: {
        width: '90%',
        '& > .MuiFormControl-root': {
            marginBottom: 20
        }
    },
    loginButton: {
        background: '#802feb',
        color: '#fff',
        width: 150,
        borderRadius: 20,
        marginTop: 20,
        transition: 'background 500ms',
        '&:hover': {
            background: '#5619a6'
        }
    },
    createAccountLink: {
        fontWeight: 'bold',
        fontSize: 15,
        marginTop: 60,
        cursor: 'pointer',
        transition: 'color 250ms',
        '&:hover': {
            color: '#555'
        }
    },
    eyeIcon: {
        cursor: 'pointer'
    },
}))