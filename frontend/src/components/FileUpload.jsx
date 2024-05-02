import {useForm} from 'react-hook-form'
import axios from 'axios';

export const FileUpload = () => {

  const {
    register,
    handleSubmit
  } = useForm();

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append('image', data.file[0]);
    console.log(data.file[0]);
    const axiosUrl = `${import.meta.env.VITE_BASE_URL}/`;

    const axiosConfig = {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }

    axios.post(axiosUrl, formData, axiosConfig)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      })
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={'file-upload-form'}
    >
      <input
        type={"file"}
        {...register("file")}
        className={'file-upload-form__button'}
      />
      <input
        type={'submit'}
        className={'file-upload-form__button'}
        value={'Upload File'}
      />
    </form>
  )
}