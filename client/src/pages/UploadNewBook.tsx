import axios from 'axios';
import React, { useState } from 'react';
import Uploady from '@rpldy/uploady';
import UploadButton from '@rpldy/upload-button';
import { ToastContainer, toast } from 'react-toastify';

import Layout from '../components/Layout';
import styled from 'styled-components';

const CLOUD_NAME = 'dsequsn4l',
  UPLOAD_PRESET = 'uploads';

const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

export default function UploadNewBook() {
  const handleResponse = (response: any) => {
    console.log(response);
    const addBook = async (response: {
      original_filename: any;
      bytes: any;
      secure_url: any;
    }) => {
      const book = {
        name: response.original_filename,
        size: response.bytes,
        url: response.secure_url,
      };
      axios
        .post('books/addNewBook', book)
        .then((response) =>
          toast.success('Book added successfully', {
            position: 'top-center',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          })
        )
        .catch((error) => console.log(error));
    };

    addBook(response);
  };

  return (
    <Layout>
      <Container>
        <Uploady
          isSuccessfulCall={(response) => {
            return handleResponse(JSON.parse(response.response)) as any;
          }}
          destination={{
            url: `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/upload`,
            params: {
              upload_preset: UPLOAD_PRESET,
            },
          }}
        >
          <UploadButton>Upload to Cloudinary</UploadButton>
        </Uploady>
      </Container>
    </Layout>
  );
}
