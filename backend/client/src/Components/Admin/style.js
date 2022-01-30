import { makeStyles } from "@material-ui/core"

export const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
    },
    tabs: {
        marginBottom: 20
    },
    panels: {
        // display: 'flex',
        // flexWrap: 'wrap',
        // justifyContent: 'space-between',
        // overflowY: 'auto',
        // flex: '1 1 auto',
    },
    panelContainer: {
        padding: 10,
        boxSizing: 'border-box',
        // display: 'flex',
        // flexFlow: 'column',
        // height: '100%',
        // background: '#eee',
        flex: '1 1 auto',
    },
    productCell: {
        border: '1px solid #aaa',
        marginTop: 5,
        marginBottom: 5,
        padding: 10,
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
        borderRadius: 5,
        width: '49%'
    },
    tool: {
        background: '#d8e0e6',
        padding: 15,
        borderRadius: 10,
        marginBottom: 5,
        display: 'flex',
        alignItems: 'center'
    },
    form: {
        width: '85%',
        '& .MuiInputBase-root': {
            background: '#fff'
        }
    },
    searchIcon: {
        cursor: 'pointer'
    },
    productInfo: {
        flexGrow: 2
    },
    icon: {
        cursor: 'pointer',
        marginLeft: 10
    },
    modalContainer: {
        width: 800,
        height: 500,
        margin: 'auto',
        marginTop: 100,
        borderRadius: 5,
        background: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    inboxContainer: {
        display: 'flex',
        // background: '#aaa',
        maxHeight: 'calc(100vh - 100px)',
        overflow: 'auto',
    },
    inboxList: {
        width: 300,
        overflow: 'auto',
        maxHeight: '100%',
        paddingLeft: 10,
        paddingRight: 10,
        boxSizing: 'border-box'
    },
    inboxWindow: {
        flexGrow: 1,
        paddingLeft: 5,
        paddingRight: 5
    },
    userCell: {
        background: '#555',
        borderRadius: 10,
        marginBottom: 5,
        paddingTop: 10,
        display: 'flex',
        paddingBottom: 10,
        paddingLeft: 10,
        alignItems: 'center',
        '& > p': {
            marginLeft: 10
        }
    },
    userInfo: {
        width: 400,
        // background: '#555'
    },
    avatar: {
        width: 100,
        height: 100,
        fontSize: 50,
        margin: 'auto',
        marginBottom: 20
    },
    avatarContainer: {
        paddingTop: 20,
        textAlign: 'center',
        marginBottom: 10
    },
    textBuble: {
        background: '#f54242',
        padding: 10,
        borderRadius: 10,
        color: '#fff',
        marginBottom: 5
    },
    textContainer: {
        height: '90%',
        overflow: 'auto',
        marginBottom: 10,
        paddingRight: 5
    },
    inboxForm: {
        width: '100%',
        '& .MuiInputBase-root': {
            background: '#fff'
        }
    }
}))