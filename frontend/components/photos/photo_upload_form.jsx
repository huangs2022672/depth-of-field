import React from 'react';
import PhotoUploadInput from './photo_upload_form_input';

class PhotoUploadForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      description: "",
      private: "false",
      photoFile: null,
      photoURL: null,
      uploaderId: this.props.currentUserId,
      selected: "",
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleTitle = this.handleTitle.bind(this)
    this.handleDescription = this.handleDescription.bind(this)
    this.handlePrivacy = this.handlePrivacy.bind(this)
    this.handleFile = this.handleFile.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
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

  handleClick(e) {
    e.currentTarget.select()
  }

  handleSelect(e) {
    if (e.currentTarget.tagName === "LABEL"){
      this.setState({selected: `${e.currentTarget.className}`})
    } else {
      this.setState({selected: ""})
    }
  }

  handleTitle(e) {
    this.setState({title: e.currentTarget.value})
  }

  handleDescription(e) {
    this.setState({description: e.currentTarget.value})
  }

  handlePrivacy(e) {
    debugger
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
              <div className="photo-upload-form">
                <form onSubmit={this.handleSubmit} className="photo-upload-form">

                  <div>
                    <h3>Editing photo: </h3>
                  </div>

                  <div className="hover-darken">
                    <label className="photo-title">
                      {this.state.title === "" ? (
                        <p className="photo-title-hidden">Add a title</p>
                      ) : null}
                      <input type="text"
                      value={this.state.title}
                      onChange={this.handleTitle}
                      onClick={this.handleClick}
                      onSelect={this.handleSelect}/>
                    </label>

                    <label className="photo-desc">
                      {this.state.description === "" ? (
                        <p className="photo-desc-hidden">Add a description</p>
                      ) : null}
                      <input type="text"
                      value={this.state.description}
                      onChange={this.handleDescription}
                      onClick={this.handleSelect}/>
                    </label>
                  </div>

                  <div className="hover-darken">
                    <label onClick={this.handleSelect}
                    className="label-tags">Add tags
                      {this.state.selected === "label-tags" ? (
                        <input type="text"
                        value={this.state.tags}
                        onChange={this.handleTags}/>
                        ) : null
                      }
                    </label>
                  </div>

                  <div className="hover-darken">
                    <label onClick={this.handleSelect}
                    className="label-albums">Add to albums
                    </label>
                  </div>

                  <div className="no-bottom-border hover-darken">

                    <p>Owner Settings</p>

                    <div>
                      <input type="radio"
                      id="public"
                      value={false}
                      onChange={this.handlePrivacy}
                      checked={this.state.private === "false"}
                      // selected={!this.state.private}
                      />
                      <label htmlFor="public">
                        Anyone (public)
                      </label>
                    </div>

                    <div>
                      <input type="radio"
                      id="private"
                      value={true}
                      onChange={this.handlePrivacy}
                      checked={this.state.private === "true"}
                      // selected={this.state.private}
                      name=""
                      />
                      <label htmlFor="private">
                        Only you (private)
                      </label>
                    </div>

                  </div>

                  <button className="upload-button">Upload photo</button>

                </form>

              </div>

              <div className="uploaded-photo-display">
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
