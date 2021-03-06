import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editItem, editItemImage, deleteItem } from '../../actions/items';
import { editHelper, clearLocal } from '../../lib/editItem';
import Select from '../../components/Select';

class EditItemForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      file: '',
      imageUrl: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeImage = this.handleChangeImage.bind(this);
    this.handleSubmitImage = this.handleSubmitImage.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleChange(e){
    editHelper(e);
  }

  handleChangeImage(event){
    event.preventDefault();
    let reader = new FileReader();
    let file = event.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file: file,
        imageUrl: reader.result
      })
    }
    reader.readAsDataURL(file);
  }

  handleDelete(id, event){
    event.preventDefault();
    this.props.deleteItem(id);
    this.props.closeEdit();
  }

  handleSubmitImage(event){
    event.preventDefault();

    let formData = new FormData();
    formData.append('file', this.state.file);
    formData.append('id', this.props.id);
    this.props.editItemImage(formData);

    this.setState({
      file: '',
      imageUrl: ''
    })

    this.props.closeEdit();

    return false;
  }

  handleSubmit(event){
    event.preventDefault();
    let editedItem = editHelper(event);
    editedItem.id = this.props.id;
    this.props.editItem(editedItem);
    this.props.closeEdit();
    clearLocal();

    return false;
  }



  render(){
    return (
      <div id="edit-item-form">
        <form onSubmit={this.handleSubmit}>
          <br />
          <h2>
            Modify item listing
          </h2>

          <label for="name">Name:</label>
          <br />
          <input type="text" id="name" placeholder={this.props.name} name="name" onChange={this.handleChange} />
          <br />
          <br />
          Status:
          <br />
          <Select name="status" id="status" handler={this.handleChange} list={this.props.itemStatuses} show="title"/>
          <br />
          <br />
          <label for="description">Description:</label>
          <br />
          <textarea id="description" cols="50" rows="10" name="description" onChange={this.handleChange} defaultValue={this.props.description} />
          <br />
          <br />
          <label for="price">Price:</label>
          <br />
          <input type="text" id="price" name="price" placeholder={this.props.price} onChange={this.handleChange} />
          <br />
          <br />
          Category:
          <br />
          <Select name="category" handler={this.handleChange} list={this.props.categories} show="title"/>
          <br />
          <br />
          Condition:
          <br />
          <Select name="condition" handler={this.handleChange} list={this.props.conditions} show="title"/>
          <br />
          <br />
         <label for="manufacturer">Manufacturer/Make:</label>
          <br />
          <input type="text" id="manufacturer" name="manfucturer" placeholder={this.props.manufacturer} onChange={this.handleChange} />
          <br />
          <br />
          <label for="model">Model:</label>
          <br />
          <input type="text" id="model" name="model" placeholder={this.props.model} onChange={this.handleChange} />
          <br />
          <br />
          <label for="dimensions">Dimensions:</label>
          <br />
          <input type="text" id="dimensions" name="dimensions" placeholder={this.props.dimensions} onChange={this.handleChange} />
          <br />
          <br />
          <label for="notes">Notes:</label>
          <br />
          <textarea id="notes" cols="50" rows="10" name="notes" onChange={this.handleChange} defaultValue={this.props.notes} />
          <input type="submit" className="button" value="Submit changes" />

        </form>
        <div className="edit-form-part-two">
          <div className="edit-image">
            <form onSubmit={this.handleSubmitImage} >
               <h2>
                 Upload new image
               </h2>
               <label for="image-upload">
                 <div className="img-container-large">
                   <img alt='Preview' className="fullsize" src={this.state.imageUrl} />
                 </div>
               </label>
               <div className="select-save-buttons">
                 <div className="select-image-button">
                   <input type="file" accept="image/*" id="image-upload" placeholder="Select new image" onChange={this.handleChangeImage}/>
                 </div>
                 <div className="submit-changed-image">
                   <input type="submit" className="button" value="Click here to save new image" />
                 </div>
                </div>
            </form>
          </div>
           <br />
           <br />
          <div className="delete-button">
           <h2>
             Delete listing
           </h2>
           <button onClick={(event)=>this.handleDelete(this.props.id, event)}>
             Click here to delete your item
           </button>
          </div>
        </div>
      </div>

  )}
}

const mapStateToProps = (state) => {
  return {
    items: state.items,
    categories: state.categories,
    conditions: state.conditions,
    itemStatuses: state.itemStatuses
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    editItemImage: (image) => {
      dispatch(editItemImage(image))
    },
    deleteItem: (item) => {
      dispatch(deleteItem(item))
    },
    editItem: (item) => {
      dispatch(editItem(item))
    }
  }
}

const ConnectedEditItemForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditItemForm)

export default ConnectedEditItemForm;