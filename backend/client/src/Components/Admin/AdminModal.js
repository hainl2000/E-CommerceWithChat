import { Box, Modal } from "@material-ui/core"
import { useEffect } from "react"
import { useStyles } from "./style"

const AdminModal = ({add = false, edit = false, view = false, open = false, setOpen}) => {
    const classes = useStyles()

    const AddModal = () => {
        return (
            <Box className={classes.modalContainer}>
                Add
            </Box>
        )
    }

    const EditModal = () => {
        return (
            <Box className={classes.modalContainer}>
                Edit
            </Box>
        )
    }

    const ViewModal = () => {
        return (
            <Box className={classes.modalContainer}>
                View
            </Box>
        )
    }
    
    const ModalContent = () => {
        if (add)
            return <AddModal/>

        if (edit)
            return <EditModal/>

        if (view)
            return <ViewModal/>

        return <></>
    }

    useEffect(() => {
        console.log(add, edit, view)
    }, [])
    
    return (
        <Modal
            open={open}
            onClose={() => setOpen(false)}
        >
            <>
                {ModalContent()}
            </>
        </Modal>
    )
}

export default AdminModal