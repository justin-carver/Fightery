import { DropzoneFileUpload } from 'dropzone';
import { useEffect, useState } from 'react';
import Dropzone, {useDropzone} from 'react-dropzone';
import styled from 'styled-components';

// Default stylization, will fix later.
const getColor = (props:any) => {
    if (props.isDragAccept) {
        return '#00e676';
    }
    if (props.isDragReject) {
        return '#ff1744';
    }
    if (props.isFocused) {
        return '#2196f3';
    }
    return '#eeeeee';
}

const ThumbsContainer = styled.div`
    display: 'flex';
    flexDirection: 'row';
    flexWrap: 'wrap';
    marginTop: 16px;
`;

const Thumb = styled.div`
        display: 'inline-flex';
        borderRadius: 2px;
        border: '1px solid #eaeaea';
        marginBottom: 8px;
        marginRight: 8px;
        width: 128px;
        height: 128px;
        padding: 4px;
        boxSizing: 'border-box';
    `;

const ThumbInner = styled.div`
    display: 'flex';
    minWidth: 0;
    overflow: 'hidden;
`;

const ThumbnailImg = styled.div`
    display: 'block';
    width: 'auto';
    height: '100%;
`;

const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border-width: 2px;
    border-radius: 2px;
    border-color: ${props => getColor(props)};
    border-style: dashed;
    background-color: #888;
    color: #FFF;
    outline: none;
    transition: border .24s ease-in-out;
`;

const StyledDropzone= (props: any) => {

    const [files, setFiles] = useState([File]);
    
    const thumbs = files.map(file => (
        <Thumb key={file.name}>
            <ThumbInner>
            <ThumbnailImg />
            </ThumbInner>
        </Thumb>
    ));
  
    useEffect(() => {
        // Make sure to revoke the data uris to avoid memory leaks
        files.forEach(file => URL.revokeObjectURL(file.preview));
    }, [files]);

    const {getRootProps, getInputProps} = useDropzone({
        accept: 'image/*',
        onDrop: acceptedFiles => {
          setFiles(acceptedFiles.map(file => Object.assign(file, {
            preview: URL.createObjectURL(file)
          })));
        }
      });
    
    return (
        <div className="container">
        <Container {...getRootProps({className: 'dropzone'})}>
            <input {...getInputProps()} />
            <p>Drag 'n' drop some headshots for the contestants here, or click for browser.</p>
        </Container>
        <ThumbsContainer>
            {thumbs}
        </ThumbsContainer>
        </div>
    );
}

export default StyledDropzone;