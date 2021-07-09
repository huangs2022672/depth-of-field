import React from 'react';
import PhotoUploadInput from './photo_upload_form_input';

class PhotoUploadForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      description: "",
      private: false,
      photoFile: null,
      photoURL: null,
      uploaderId: this.props.currentUserId
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleTitle = this.handleTitle.bind(this)
    this.handleDescription = this.handleDescription.bind(this)
    this.handlePrivacy = this.handlePrivacy.bind(this)
    this.handleFile = this.handleFile.bind(this)
  }

  handleSubmit(e) {
    // debugger
    e.preventDefault();
    const formData = new FormData();
    formData.append('photo[title]', this.state.title);
    formData.append('photo[description]', this.state.description);
    formData.append('photo[private]', this.state.private);
    formData.append('photo[file]', this.state.photoFile);
    formData.append('photo[uploader_id]', this.state.uploaderId);
    this.props.uploadPhoto(formData)
  }

  handleTitle(e) {
    this.setState({title: e.currentTarget.value})
  }

  handleDescription(e) {
    this.setState({description: e.currentTarget.value})
  }

  handlePrivacy(e) {
    this.setState({private: e.currentTarget.value})
  }

  handleFile(e) {
    const file = e.currentTarget.files[0]
    const fileReader = new FileReader();
    // debugger
    fileReader.onloadend = () => {
      this.setState({
        title: file.name,
        photoFile: file,
        photoUrl: fileReader.result
      })
    }
    if (file) {
      fileReader.readAsDataURL(file);
    }
    // this.setState({title: e.currentTarget.files[0].name})
  }

  render() {
    console.log(this.state)
    const { uploadPhoto } = this.props
    return (
      <div>
        <div className="upload-control-bar">
          <PhotoUploadInput
            handleFile={this.handleFile}
          />
        </div>
        {
          !this.state.photoFile ? (
            <div className="upload-main">
              <div className="photo-upload-content">
                <div>
                  <div>
                    <p>Drag & drop photos here</p>
                    <p>or</p>
                  </div>
                  <PhotoUploadInput
                    handleFile={this.handleFile}
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="after-file-uploaded">
              <form onSubmit={this.handleSubmit}
              className="photo-upload-form"
              >
                <h3>Edit Photo</h3>

                <label htmlFor="title"></label>
                <input type="text"
                id="title"
                value={this.state.title}
                onChange={this.handleTitle}
                />

                <label htmlFor="description">Add a description</label>
                <input type="text"
                id="description"
                value={this.state.description}
                onChange={this.handleDescription}
                />

                <p>Privacy</p>
                <input type="radio"
                id="public"
                value={false}
                onChange={this.handlePrivacy}
                checked
                />
                <label htmlFor="public">Anyone (public)</label>
                <input type="radio"
                id="private"
                value={true}
                onChange={this.handlePrivacy}
                />
                <label htmlFor="private">Only you (private)</label>
                <button>Upload photo</button>
              </form>
              <div className="uploaded-photo-display">
                <h3>PHOTO PREVIEW</h3>
                <img src={this.state.photoUrl} alt={this.state.title} />
              </div>
            </div>
          )
        }
      </div>
    )
  }
}

export default PhotoUploadForm;
