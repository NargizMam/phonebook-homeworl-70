import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {Modal} from "@mui/material";
import Backdrop from "../Backdrop/Backdrop";
import {useAppSelector} from "../../app/hook";
import {selectIsShowModal} from "../../store/ContactsSlice";

interface Props extends React.PropsWithChildren {
    title: string;
}
const ContactModal: React.FC<Props> = ({ title,children}) => {
    const isShow = useAppSelector(selectIsShowModal);

    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    return (
        <>
            <Backdrop/>
            <Modal
                open={isShow}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <Box sx={style}>
                    <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
                        {title}
                    </Typography>
                    <Typography id="keep-mounted-modal-description" component="h6" sx={{ mt: 2 }}>
                        {children}
                    </Typography>
                </Box>
            </Modal>
        </>
    );
    }

//
export default ContactModal;
