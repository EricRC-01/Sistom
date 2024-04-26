import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Button, Card } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useState, useEffect } from 'react';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export default function InputFileUpload(props) {

    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()

    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])

    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }

        // I've kept this example simple by using the first image instead of multiple
        props.setPhoto(e.target.files[0])
        setSelectedFile(e.target.files[0])
    }

    return (
        <Card sx={{ m:2 }}>
            <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            onChange={onSelectFile}
            startIcon={<CloudUploadIcon />}
            >
            SELECIONAR ARQUIVO
            <VisuallyHiddenInput type="file" />
            </Button>

            {selectedFile &&  <img src={preview} /> }
        </Card>
    );
}